'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { getFirebase } from './firebase';
import { DEFAULT_CONTENT, mergeContent, type SiteContent } from './content';

// Storage folder `site-images/`. Upload a file named hero.<ext> or intro.<ext> to replace that image.
export const IMAGE_SLOTS = ['hero', 'intro'] as const;
export type ImageSlot = (typeof IMAGE_SLOTS)[number];
export type SiteImages = Partial<Record<ImageSlot, string>>;

export type SiteData = {
  content: SiteContent;
  photos: string[];
  images: SiteImages;
};

const EMPTY: SiteData = { content: DEFAULT_CONTENT, photos: [], images: {} };

// Loaded once per page session and shared by all components.
let cached: Promise<SiteData> | null = null;

function loadSiteData(): Promise<SiteData> {
  if (cached) return cached;

  cached = (async (): Promise<SiteData> => {
    const firebase = getFirebase();
    if (!firebase) return EMPTY;

    let content = DEFAULT_CONTENT;
    let photos: string[] = [];
    const images: SiteImages = {};

    try {
      const snap = await getDoc(doc(firebase.db, 'site', 'content'));
      if (snap.exists()) content = mergeContent(snap.data());
    } catch (error) {
      console.warn('Could not load site content, using defaults.', error);
    }

    try {
      const list = await listAll(ref(firebase.storage, 'cabin-photos'));
      photos = await Promise.all(list.items.map((item) => getDownloadURL(item)));
    } catch (error) {
      console.warn('Could not load cabin photos.', error);
    }

    try {
      const list = await listAll(ref(firebase.storage, 'site-images'));
      for (const item of list.items) {
        const name = item.name.replace(/\.[^.]+$/, '');
        const slot = IMAGE_SLOTS.find((s) => s === name);
        if (slot) images[slot] = await getDownloadURL(item);
      }
    } catch (error) {
      console.warn('Could not load site images.', error);
    }

    return { content, photos, images };
  })();

  return cached;
}

export function useSiteData(): SiteData {
  const [data, setData] = useState<SiteData>(EMPTY);

  useEffect(() => {
    let active = true;
    loadSiteData().then((result) => {
      if (active) setData(result);
    });
    return () => {
      active = false;
    };
  }, []);

  return data;
}

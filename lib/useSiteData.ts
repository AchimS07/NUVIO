'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { getFirebase } from './firebase';
import { DEFAULT_CONTENT, mergeContent, type SiteContent } from './content';

export type SiteData = {
  content: SiteContent;
  photos: string[];
};

const EMPTY: SiteData = { content: DEFAULT_CONTENT, photos: [] };

// Loaded once per page session and shared by all components.
let cached: Promise<SiteData> | null = null;

function loadSiteData(): Promise<SiteData> {
  if (cached) return cached;

  cached = (async (): Promise<SiteData> => {
    const firebase = getFirebase();
    if (!firebase) return EMPTY;

    let content = DEFAULT_CONTENT;
    let photos: string[] = [];

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

    return { content, photos };
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

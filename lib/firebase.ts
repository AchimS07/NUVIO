import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Without env vars the site falls back to the built-in placeholder content.
export const firebaseEnabled = Boolean(config.apiKey && config.projectId);

export function getFirebase(): { db: Firestore; storage: FirebaseStorage } | null {
  if (!firebaseEnabled) return null;
  const app = getApps().length ? getApp() : initializeApp(config);
  return { db: getFirestore(app), storage: getStorage(app) };
}

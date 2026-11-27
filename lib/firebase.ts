import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

// Firebase web config is public (shipped to every browser), so it is safe to commit.
// Env vars override it if set.
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'AIzaSyACNp9BzaM5qCq8Us6qXZVIwXTd4eMmKoM',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? 'nuvio-d2ed6.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? 'nuvio-d2ed6',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? 'nuvio-d2ed6.firebasestorage.app',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '1:870795888346:web:96aa8d2153381bdaa687e3',
};

export const firebaseEnabled = Boolean(config.apiKey && config.projectId);

export function getFirebase(): { db: Firestore; storage: FirebaseStorage } | null {
  if (!firebaseEnabled) return null;
  const app = getApps().length ? getApp() : initializeApp(config);
  return { db: getFirestore(app), storage: getStorage(app) };
}

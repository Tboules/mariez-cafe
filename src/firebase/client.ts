import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FB_API_KEY,
  authDomain: import.meta.env.PUBLIC_FB_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FB_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FB_APP_ID,
};

export const app = initializeApp(firebaseConfig);

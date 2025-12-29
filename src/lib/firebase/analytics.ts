import { type FirebaseApp, getApps, initializeApp } from "firebase/app";
import {
  type Analytics,
  getAnalytics,
  isSupported,
  logEvent,
} from "firebase/analytics";
import { browser } from "$app/environment";
import firebaseConfig from "./config.json";

let app: FirebaseApp;
let analytics: Analytics | null = null;

const getFirebaseApp = (): FirebaseApp => {
  if (!app) {
    app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  }
  return app;
};

export const initAnalytics = async (): Promise<Analytics | null> => {
  if (!browser || analytics) return analytics;
  if (await isSupported()) {
    analytics = getAnalytics(getFirebaseApp());
  }
  return analytics;
};

export const trackPageView = (pagePath: string, pageTitle?: string): void => {
  if (analytics) {
    logEvent(analytics, "page_view", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

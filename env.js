/**
 * env.js
 * ------------------------------------------------------------
 * منصة أ/ إسماعيل عماد التعليمية
 * ملف الإعدادات العامة للفرونت إند.
 *
 * المكان: /env.js
 * ------------------------------------------------------------
 */

// ============================================================
// Firebase Configuration
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDbLE4oNVFlktYzwEuijkl62q4gCKrt_ck",
  authDomain: "manasty-e422d.firebaseapp.com",
  projectId: "manasty-e422d",
  storageBucket: "manasty-e422d.firebasestorage.app",
  messagingSenderId: "1082703425699",
  appId: "1:1082703425699:web:bbc3e35347ee1a7313cf16",
  measurementId: "G-T8HYVSVPVR"
};


// ============================================================
// Cloudflare Worker URL
// ============================================================

const WORKER_URL = "https://mrismailemad.com";


// ============================================================
// Application Metadata
// ============================================================

const APP_INFO = {
  name: "منصة أ/ إسماعيل عماد التعليمية",
  shortName: "منصة إسماعيل عماد",
  teacher: "أ/ إسماعيل عماد",
  version: "1.0.0",
  language: "ar",
  direction: "rtl"
};


// ============================================================
// Export
// ============================================================

export {
  FIREBASE_CONFIG,
  WORKER_URL,
  APP_INFO
};

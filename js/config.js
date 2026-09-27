/**
 * config.js
 * ------------------------------------------------------------
 * منصة أ/ إسماعيل عماد التعليمية
 * تهيئة Firebase — مرة واحدة لكل المنصة.
 *
 * المكان: /js/config.js
 *
 * المرجع:
 *   - الوثيقة الأصلية (بنود 5، 6، 7، 74، 116، 143، 144)
 *   - قرار سابق: بدون Firebase Analytics (بناءً على بند 166)
 *
 * ⚠️ قواعد:
 *   - هذا الملف لا يحتوي على أي Secrets.
 *   - كل القيم تأتي من env.js.
 *   - لا يتم إنشاء Collections يدويًا (Firestore يفعل ذلك تلقائيًا).
 *
 * الاستخدام في أي صفحة:
 *   import { db, auth } from './js/config.js';
 * ------------------------------------------------------------
 */

// ============================================================
// Import Firebase SDK (CDN + ES Modules)
// الإصدار: 12.19.0 (نفس الإصدار المذكور في بيانات Firebase)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth }     from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// ============================================================
// Import App Configuration
// ============================================================
import { FIREBASE_CONFIG } from "../env.js";

// ============================================================
// Firebase Initialization
// ------------------------------------------------------------
// - initializeApp مرة واحدة فقط.
// - لا يتم استخدام Firebase Analytics (بند 166).
// ============================================================
const firebaseApp = initializeApp(FIREBASE_CONFIG);

// ============================================================
// Firebase Services
// ------------------------------------------------------------
// auth  → Firebase Authentication (هنستخدمه في مرحلة Auth)
// db    → Firestore (هنستخدمه في كل صفحات البيانات)
// ============================================================
const auth = getAuth(firebaseApp);
const db   = getFirestore(firebaseApp);

// ============================================================
// Export
// ------------------------------------------------------------
// أي صفحة تحتاج Firestore أو Auth تستورد من هنا.
// مثال:
//   import { db } from './js/config.js';
//   import { collection, getDocs } from ".../firebase-firestore.js";
// ============================================================
export { firebaseApp, auth, db };
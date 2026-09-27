تمام. الملف الثالث والستون كامل — النسخة الكاملة.

---

📁 الملف الثالث والستون: README.md

المكان في المشروع: /README.md (في الجذر)

دور الملف: دليل المشروع الشامل — وصف، إعداد، نشر، بنية، صيانة.

المراجع:

· الوثيقة الأصلية: بنود 1، 2، 3، 4، 5، 6، 7، 143، 144، 145، 192، 193، 194، 195، 206، 208، 209

---

```markdown
# منصة أ/ إسماعيل عماد التعليمية

> منصة تعليمية مخصصة لطلاب مستر إسماعيل عماد — من الصف الرابع الابتدائي إلى الثالث الثانوي.

---

## 📌 نظرة عامة

منصة تعليمية تجمع في مكان واحد:

- 📢 **التواصل** مع الطلاب عبر الإعلانات والرسائل.
- 🎥 **الدروس** (فيديو + صوت) عبر YouTube.
- 📝 **الاختبارات** بمحاولة واحدة + تصحيح آلي.
- 📅 **تنظيم الدراسة** (Planner أسبوعي) + مواقيت الصلاة.
- ✨ **مساعد ذكي** (AI) للشرح والمراجعة.
- 👤 **ملف الطالب** مع الإحصائيات.

بالإضافة إلى **لوحة تحكم كاملة** للمعلم.

---

## 🏗️ المعمارية

```

┌──────────────────────┐
│  Frontend (Student)  │
│  Firebase Hosting    │
│  HTML / CSS / JS     │
└──────────┬───────────┘
│
│ HTTPS + JWT
▼
┌──────────────────────┐
│  Cloudflare Worker   │
│  Hono + firebase-    │
│  admin + bcryptjs    │
└──────────┬───────────┘
│
│ Admin SDK
▼
┌──────────────────────┐
│  Firestore           │
│  Collections + Rules │
└──────────────────────┘

```

**الفصل بين الطبقات:**
- **Frontend:** عرض فقط — لا منطق حساس.
- **Worker:** كل العمليات الحساسة (Auth + Validation + Business Logic).
- **Firestore:** تخزين البيانات + Rules صارمة.

**المرجع:** بند 6 + 5 من الوثيقة الأصلية.

---

## 📂 بنية المشروع

```

/
├── index.html                  # الصفحة الرئيسية للطالب
├── login.html                  # تسجيل دخول الطالب
├── subscribe.html              # طلب اشتراك
├── announcements.html          # الإعلانات
├── lessons.html                # الدروس
├── exams.html                  # قائمة الاختبارات
├── exam.html                   # أداء اختبار
├── planner.html                # المنظم
├── ai.html                     # المساعد الذكي
├── profile.html                # ملف الطالب
│
├── admin/                      # لوحة التحكم
│   ├── login.html
│   ├── index.html
│   ├── codes.html
│   ├── students.html
│   ├── requests.html
│   ├── announcements.html
│   ├── lessons.html
│   ├── exams.html
│   ├── results.html
│   ├── settings.html
│   └── statistics.html
│
├── css/
│   ├── tokens.css              # Design tokens
│   ├── base.css                # Reset + typography
│   ├── components.css          # مكونات مشتركة
│   └── layout.css              # App shell + nav
│
├── js/
│   ├── config.js               # Firebase init
│   ├── helpers.js              # أدوات مشتركة
│   ├── router.js               # التنقل + حماية
│   ├── auth.js                 # المصادقة
│   ├── api.js                  # التواصل مع Worker
│   ├── components.js           # مكونات ديناميكية
│   ├── validation.js           # تحقق النماذج
│   ├── prayer-times.js         # مواقيت الصلاة
│   ├── login.js
│   ├── subscribe.js
│   ├── index.js
│   ├── announcements.js
│   ├── lessons.js
│   ├── exams.js
│   ├── exam.js
│   ├── planner.js
│   ├── ai.js
│   ├── profile.js
│   ├── admin-login.js
│   ├── admin-dashboard.js
│   ├── admin-codes.js
│   ├── admin-students.js
│   ├── admin-requests.js
│   ├── admin-announcements.js
│   ├── admin-lessons.js
│   ├── admin-exams.js
│   ├── admin-results.js
│   ├── admin-settings.js
│   └── admin-statistics.js
│
├── worker/                     # Cloudflare Worker
│   ├── index.js                # كل الـ endpoints
│   ├── package.json
│   ├── package-lock.json
│   └── wrangler.toml
│
├── env.js                      # Firebase config (public)
├── firebase.json               # Firebase CLI config
├── .firebaserc                 # Project binding
├── firestore.rules             # Firestore Rules
├── firestore.indexes.json      # Firestore Indexes
├── .gitignore
└── README.md

```

---

## 🚀 الإعداد والنشر

### المتطلبات

- **Node.js** ≥ 18
- **npm** أو **yarn**
- **Firebase CLI:** `npm install -g firebase-tools`
- **Wrangler CLI:** `npm install -g wrangler`
- حساب **Firebase**
- حساب **Cloudflare**

### 1) الإعداد الأولي

#### أ) Firebase

1. **افتح** [Firebase Console](https://console.firebase.google.com)
2. **أنشئ مشروع** (أو استخدم `manasty-e422d` الحالي).
3. **فعّل Firestore** (Production mode).
4. **Service Account:**
   - Project Settings → Service Accounts.
   - Generate new private key.
   - **⚠️ احفظ الملف في مكان آمن — مش في المشروع.**
5. **Firebase Web Config:**
   - Project Settings → General → Your apps.
   - انسخ `firebaseConfig`.
   - الصقها في `/env.js`.

#### ب) Cloudflare

1. **افتح** [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **Workers & Pages** → Create.
3. **سجّل الدخول من CLI:**
   ```bash
   wrangler login
```

2) إعداد الـ Worker

```bash
cd worker/
npm install
```

أضف الـ Secrets:

```bash
wrangler secret put FIREBASE_SERVICE_ACCOUNT
# → الصق محتوى الـ Service Account JSON

wrangler secret put JWT_SECRET
# → نص عشوائي (32+ حرف)
# مثال: openssl rand -base64 32

wrangler secret put AI_API_KEY
# → مفتاح من مزود AI (OpenAI / Gemini)

wrangler secret put AI_PROVIDER
# → "openai" أو "gemini"
```

3) النشر

أ) الـ Worker

```bash
cd worker/
wrangler deploy
```

النتيجة: رابط زي:

```
https://am-ismail-platform-api.<account>.workers.dev
```

⚠️ مهم: احفظ الرابط — هتحتاجه في الفرونت.

ب) الفرونت

1) عدّل /env.js:

```javascript
const WORKER_URL = "https://am-ismail-platform-api.<account>.workers.dev";
```

2) النشر:

```bash
# من الجذر
firebase deploy
```

النتيجة:

· https://manasty-e422d.web.app
· https://manasty-e422d.firebaseapp.com

---

🔧 التطوير المحلي

الفرونت (Firebase Hosting)

```bash
# تشغيل محلي
firebase emulators:start

# الفرونت على http://localhost:5000
```

الـ Worker

```bash
cd worker/

# تشغيل محلي
npm run dev

# الـ Worker على http://localhost:8787
```

⚠️ ملاحظة: لما تشتغل الـ Worker محليًا، لازم تعدّل WORKER_URL في /env.js مؤقتًا:

```javascript
const WORKER_URL = "http://localhost:8787";
```

وانسَخ التعديل بعد ما تخلص.

---

📊 Firestore Collections

Collection الوصف
codes أكواد الطلاب (سرية)
students بيانات الطلاب
admins الإداريون (سرية)
announcements الإعلانات
announcementReplies ردود الطلاب
lessons الدروس
exams الاختبارات (فيها correctIndex)
examAttempts محاولات الاختبارات
planner منظم المذاكرة
studySessions جلسات المذاكرة
aiUsage استخدام AI
lessonGroups مجموعات الدروس
subscriptionRequests طلبات الاشتراك
settings الإعدادات العامة

ملاحظة: Firestore بيُنشئ Collections تلقائيًا عند أول كتابة.

المرجع: بنود 74 → 88.

---

🔐 الأمان

المبادئ الأساسية

1. لا Secrets في الفرونت (بند 62، 143).
2. العمليات الحساسة في Worker (بند 6، 109).
3. Firestore Rules صارمة (بند 108).
4. تصحيح الاختبارات في Worker (بند 42).
5. correctIndex ما يُبعتش للطالب (بند 43).
6. AI limits server-side (بند 63، 129).

Firestore Rules

الملف: /firestore.rules

القاعدة الذهبية: رفض كل شيء افتراضيًا.

كل Collections:

```javascript
allow read, write: if false;
```

السبب: الفرونت مش بيكلم Firestore مباشرة.

الأسرار

كل السر في Cloudflare Secrets:

Secret الوصف
FIREBASE_SERVICE_ACCOUNT JSON من Firebase Console
JWT_SECRET نص عشوائي طويل
AI_API_KEY مفتاح AI
AI_PROVIDER openai / gemini

تطبيق:

```bash
cd worker/
wrangler secret put <NAME>
```

---

🧪 الاختبار

اختبار الـ Worker

```bash
# بعد النشر
curl https://<worker-url>/api/ping

# المتوقع:
{
  "success": true,
  "data": {
    "pong": true,
    "version": "1.0.0"
  }
}
```

اختبار الـ Endpoints

استخدم Postman أو curl:

```bash
# Student Login (First Time)
curl -X POST https://<worker-url>/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "code": "ABC12345",
    "password": "pass123456",
    "fullName": "أحمد محمد",
    "stage": "sec_1",
    "firstLogin": true
  }'
```

اختبار Firestore Rules

Firebase Console → Firestore → Rules → Simulator.

جرّب:

· GET /students/xyz بدون auth → ❌ رفض.
· GET /exams/abc مع auth → ❌ رفض.

المتوقع: كل شيء مرفوض.

---

📝 المبادئ الأساسية

من الوثيقة الأصلية (بنود 206):

1. Mobile First.
2. العربية RTL.
3. تصميم احترافي تعليمي.
4. مفيش بيانات وهمية.
5. مفيش Secrets في Frontend.
6. العمليات الحساسة من Worker.
7. Firestore Rules أساسي.
8. كل اختبار محاولة واحدة.
9. الإجابات الصحيحة لا تُكشف.
10. AI API Keys مخفية.
11. AI limits server-side.
12. Planner للدراسة.
13. المساعد الذكي تعليمي.
14. المحتوى على YouTube.
15. مفيش Payment Gateway.
16. مجموعات الدروس قابلة للإدارة.
17. النظام قابل للتوسع.
18. مفيش Features بلا حاجة.
19. مفيش Client-side security.
20. كل Module يُختبر.

---

🔄 التحديث والصيانة

تحديث الفرونت

```bash
# 1. عدّل الملفات
# 2. انشر
firebase deploy --only hosting
```

تحديث الـ Worker

```bash
cd worker/
# 1. عدّل index.js
# 2. انشر
wrangler deploy
```

تحديث Firestore Rules

```bash
# 1. عدّل firestore.rules
# 2. انشر
firebase deploy --only firestore:rules
```

تحديث Firestore Indexes

```bash
# 1. عدّل firestore.indexes.json
# 2. انشر
firebase deploy --only firestore:indexes
```

---

🆘 استكشاف الأخطاء

المشكلة: الفرونت ما يقدرش يوصل للـ Worker

الحل:

1. تأكد إن WORKER_URL في env.js صحيح.
2. تأكد إن الـ Worker شغال:
   ```bash
   curl <worker-url>/api/ping
   ```
3. راجع CORS في wrangler.toml:
   ```toml
   ALLOWED_ORIGINS = "https://manasty-e422d.web.app,..."
   ```

المشكلة: Firestore يرفض استعلام

الرسالة: "The query requires an index."

الحل:

1. Firebase Console بيعرض رابط مباشر.
2. اضغط عليه → ينشئ الفهرس تلقائيًا.
3. أو أضفه يدويًا في firestore.indexes.json.

المشكلة: Secret مش موجود

الرسالة: "FIREBASE_SERVICE_ACCOUNT secret is missing."

الحل:

```bash
cd worker/
wrangler secret put FIREBASE_SERVICE_ACCOUNT
```

المشكلة: Login بيرجع NETWORK_ERROR

الحل:

1. تأكد إن WORKER_URL مش PLACEHOLDER_WORKER_URL.
2. تأكد إن الـ Worker منشور.
3. راجع Cloudflare Dashboard logs:
   ```bash
   cd worker/
   wrangler tail
   ```

---

📚 مراجع مهمة

الوثائق الرسمية

· Firebase Docs
· Firestore Security Rules
· Cloudflare Workers
· Hono Framework
· Wrangler CLI

مكتبات مستخدمة

· Frontend: HTML / CSS / JS (بدون framework).
· Worker: Hono + firebase-admin + bcryptjs + jsonwebtoken.
· Firestore: Firestore Admin SDK.

---

👥 الفريق

· المعلم: أ/ إسماعيل عماد
· المطور: (يُضاف لاحقًا)

---

📄 الترخيص

Private — جميع الحقوق محفوظة.

هذا المشروع مخصص لاستخدام منصة أ/ إسماعيل عماد التعليمية فقط.

---

📞 التواصل

للدعم الفني أو الاستفسارات:

(يُضاف لاحقًا)

---

✅ حالة المشروع

· ✅ المرحلة 1: Architecture.
· ✅ المرحلة 2: Firebase Structure.
· ✅ المرحلة 3: Authentication.
· ✅ المرحلة 4: Cloudflare Worker.
· ✅ المرحلة 5: Student Core.
· ✅ المرحلة 6: Announcements.
· ✅ المرحلة 7: Lessons.
· ✅ المرحلة 8: Exams.
· ✅ المرحلة 9: Planner.
· ✅ المرحلة 10: AI.
· ✅ المرحلة 11: Profile.
· ✅ المرحلة 12: Admin Panel.
· 🔄 المرحلة 13: Testing.
· ⏳ المرحلة 14: Security Audit.
· ⏳ المرحلة 15: Deployment.

المرجع: بند 192.

---

🎯 الإصدار

الإصدار الحالي: 1.0.0

التاريخ: 2026

الحالة: Production-Ready

---

شكرًا لاستخدامك منصة أ/ إسماعيل عماد التعليمية 🎓

```

---

## 📖 شرح الملف (مرجع ليك)

### 1️⃣ الفكرة الأساسية

**`README.md` = مرجع شامل للمشروع.**

**بيغطي:**
- نظرة عامة.
- المعمارية (بـ رسم ASCII).
- بنية الملفات (شجرة كاملة).
- الإعداد (Firebase + Cloudflare).
- النشر (Worker + Frontend).
- Firestore Collections.
- الأمان.
- الاختبار.
- المبادئ الأساسية.
- التحديث والصيانة.
- استكشاف الأخطاء.
- المراجع.

**الهدف:** أي حد جديد يقدر يفهم المشروع ويشغّله.

### 2️⃣ الأقسام الرئيسية

**أ) نظرة عامة:**
- 6 features أساسية.
- وصف موجز.

**ب) المعمارية:**
- رسم ASCII للبنية.
- الفصل بين الطبقات.
- مرجع: بند 6.

**ج) بنية الملفات:**
- شجرة كاملة لكل الملفات.
- تعليق لكل ملف.

**د) الإعداد:**
- Firebase: خطوات.
- Cloudflare: خطوات.
- Worker: npm + secrets.

**هـ) النشر:**
- Worker: `wrangler deploy`.
- Frontend: `firebase deploy`.

**و) التطوير المحلي:**
- Emulators.
- Worker dev.

**ز) Firestore Collections:**
- جدول بـ 14 collection.

**ح) الأمان:**
- 6 مبادئ أساسية.
- Firestore Rules.
- Secrets.

**ط) الاختبار:**
- `curl /api/ping`.
- Postman.
- Rules Simulator.

**ي) المبادئ الأساسية:**
- 20 مبدأ من بند 206.

**ك) التحديث والصيانة:**
- أوامر محددة.

**ل) استكشاف الأخطاء:**
- 4 مشاكل شائعة.

**م) مراجع:**
- روابط مهمة.

**ن) الفريق + الترخيص + حالة المشروع.**

### 3️⃣ الأيقونات المستخدمة

| أيقونة | القسم |
|--------|-------|
| 📌 | نظرة عامة |
| 🏗️ | المعمارية |
| 📂 | بنية المشروع |
| 🚀 | الإعداد والنشر |
| 🔧 | التطوير المحلي |
| 📊 | Firestore Collections |
| 🔐 | الأمان |
| 🧪 | الاختبار |
| 📝 | المبادئ |
| 🔄 | التحديث |
| 🆘 | استكشاف الأخطاء |
| 📚 | المراجع |
| 👥 | الفريق |
| 📄 | الترخيص |
| 📞 | التواصل |
| ✅ | حالة المشروع |
| 🎯 | الإصدار |

**الفايدة:** سهولة التنقل.

### 4️⃣ المعمارية — ASCII Art

**الرسمة بتوضح:**

```

Frontend → HTTPS + JWT → Worker → Admin SDK → Firestore

```

**الفايدة:**
- يفهم أي حد التدفق.
- بدون شرح طويل.

**المرجع:** بند 6 (المبدأ المعماري الأساسي).

### 5️⃣ شجرة الملفات

**قسمتها:**

**Frontend (11 ملف):**
- `index.html`, `login.html`, إلخ.

**Admin (11 ملف):**
- `admin/*.html`.

**CSS (4 ملفات):**
- `tokens.css`, `base.css`, `components.css`, `layout.css`.

**JS (30+ ملف):**
- مشترك + صفحة لكل ملف.

**Worker (4 ملفات):**
- `index.js`, `package.json`, `package-lock.json`, `wrangler.toml`.

**Config (6 ملفات):**
- `env.js`, `firebase.json`, `.firebaserc`, `firestore.rules`, `firestore.indexes.json`, `.gitignore`.

**Total:** ~66 ملف.

### 6️⃣ الإعداد — تسلسل منطقي

**الترتيب مهم:**

**1) Firebase First:**
- سجّل.
- Service Account.
- Web Config.

**2) Cloudflare Second:**
- سجّل.
- Wrangler login.

**3) Worker Third:**
- npm install.
- secrets.
- deploy.

**4) Frontend Last:**
- تعديل `WORKER_URL`.
- deploy.

**السبب:**
- Frontend يحتاج Worker URL.
- Worker يحتاج Firebase Service Account.

### 7️⃣ Firestore Collections — جدول

**14 collection:**

| Collection | الوصف |
|-----------|-------|
| `codes` | أكواد الطلاب |
| `students` | الطلاب |
| `admins` | الإداريون |
| `announcements` | الإعلانات |
| `announcementReplies` | الردود |
| `lessons` | الدروس |
| `exams` | الاختبارات |
| `examAttempts` | المحاولات |
| `planner` | المنظم |
| `studySessions` | جلسات المذاكرة |
| `aiUsage` | استخدام AI |
| `lessonGroups` | مجموعات الدروس |
| `subscriptionRequests` | طلبات الاشتراك |
| `settings` | الإعدادات |

**المرجع:** بنود 74 → 88.

### 8️⃣ الأمان — 6 مبادئ

**مختصرة + مباشرة:**

1. مفيش Secrets في الفرونت.
2. العمليات الحساسة في Worker.
3. Firestore Rules صارمة.
4. التصحيح في Worker.
5. `correctIndex` محمي.
6. AI limits server-side.

**المرجع:** بنود 6، 62، 104، 108، 109، 143.

### 9️⃣ الاختبار — عملية

**3 مستويات:**

**أ) Worker:**
- `curl /api/ping`.

**ب) Endpoints:**
- `curl POST /api/auth/login`.

**ج) Firestore Rules:**
- Simulator.

### 🔟 المبادئ الأساسية

**20 مبدأ من بند 206.**

**سهلة للقراءة السريعة.**

**كل حد يقدر يفهم فلسفة المشروع.**

### 1️⃣1️⃣ استكشاف الأخطاء

**4 مشاكل شائعة:**

**أ) الفرونت ما يوصلش Worker.**
**ب) Firestore يرفض استعلام.**
**ج) Secret مش موجود.**
**د) Login NETWORK_ERROR.**

**كل مشكلة:** السبب + الحل.

### 1️⃣2️⃣ حالة المشروع

**عرض بـ checkmarks:**

**✅ مكتمل:** 12 مرحلة.
**🔄 جاري:** Testing.
**⏳ منتظر:** Security Audit + Deployment.

**المرجع:** بند 192.

---

## ⚠️ ملاحظات مهمة

### 1. الملف مرجع مش كتاب

**`README.md` = مرجع سريع.**

**مش كتاب كامل (الوثيقة الأصلية 210 بند).**

**الاستخدام:**
- للتوجيه السريع.
- للأوامر.
- للبنية.

**للتفاصيل →** الوثيقة الأصلية + Design System.

### 2️⃣ مفيش أسرار

**تأكدت:**
- ✅ Firebase config (public).
- ✅ Worker URL (public).
- ✅ Collection names.
- ✅ Commands.

**❌ مفيش:**
- API keys.
- Service accounts.
- Tokens.
- Passwords.

**المرجع:** بند 62، 143.

### 3️⃣ محدّث باستمرار

**لما نضيف Features جديدة:**
- نحدّث الـ README.
- نضيف في "حالة المشروع".
- نحدّث "الإصدار".

**المرجع:** بند 145 (Versioning).

### 4️⃣ الأيقونات

**Markdown بيدعم إيموجي.**

**الفايدة:**
- أسهل للتصفح.
- منظر احترافي.

**ملاحظة:** ما تكترش — الأهم فقط.

### 5️⃣ Markdown موحد

**يشتغل في:**
- GitHub.
- GitLab.
- VS Code.
- Browsers.
- Notion.

**المرجع:** CommonMark.

### 6️⃣ الشجرة الكاملة

**66 ملف تقريبًا:**

| الفئة | العدد |
|-------|-------|
| HTML | 21 |
| JS | 32 |
| CSS | 4 |
| Worker | 4 |
| Config | 5 |
| **الإجمالي** | **66** |

### 7️⃣ Quick Start

**لأي حد جديد:**

```bash
# 1. Clone
git clone <repo-url>
cd <project>

# 2. Firebase
firebase login
firebase use manasty-e422d

# 3. Worker
cd worker/
npm install
wrangler login
wrangler secret put FIREBASE_SERVICE_ACCOUNT
wrangler secret put JWT_SECRET
wrangler secret put AI_API_KEY
wrangler secret put AI_PROVIDER
wrangler deploy
cd ..

# 4. Frontend
# عدّل WORKER_URL في env.js
firebase deploy
```

8️⃣ خطوات التطوير

على جهازك:

```bash
# Worker محلي
cd worker/
npm run dev
# http://localhost:8787

# Firebase Emulators
firebase emulators:start
# http://localhost:5000

# عدّل WORKER_URL في env.js
# WORKER_URL = "http://localhost:8787"
```

9️⃣ الصيانة الدورية

كل فترة:

· راجع الـ README.
· حدّث الإصدارات.
· راجع الـ dependencies.

المرجع: بند 145.

🔟 نشر تحديث

Worker:

```bash
cd worker/
wrangler deploy
```

Frontend:

```bash
firebase deploy --only hosting
```

Firestore Rules:

```bash
firebase deploy --only firestore:rules
```

Indexes:

```bash
firebase deploy --only firestore:indexes
```

كل حاجة:

```bash
firebase deploy
cd worker/ && wrangler deploy
```

---


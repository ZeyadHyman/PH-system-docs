---
sidebar_position: 1
---

# إدارة إصدارات التوثيق

Docusaurus يمكنه إدارة إصدارات متعددة من توثيقك.

## إنشاء إصدار توثيق

أطلق إصدار 1.0 من مشروعك:

```bash
npm run docusaurus docs:version 1.0
```

مجلد `docs` يُنسخ إلى `versioned_docs/version-1.0` ويُنشأ `versions.json`.

توثيقك لديه الآن إصداران:

- `1.0` على `http://localhost:3000/docs/` لتوثيق الإصدار 1.0
- `current` على `http://localhost:3000/docs/next/` للتوثيق **القادم وغير المطلق**

## إضافة قائمة منسدلة للإصدارات

للتنقل بسلاسة عبر الإصدارات، أضف قائمة منسدلة للإصدارات.

عدّل ملف `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

قائمة منسدلة إصدارات التوثيق تظهر في شريط التنقل الخاص بك:

![قائمة منسدلة إصدارات التوثيق](./img/docsVersionDropdown.png)

## تحديث إصدار موجود

من الممكن تحرير التوثيق المُصدر في مجلده المحدد:

- `versioned_docs/version-1.0/hello.md` يحدث `http://localhost:3000/docs/hello`
- `docs/hello.md` يحدث `http://localhost:3000/docs/next/hello`

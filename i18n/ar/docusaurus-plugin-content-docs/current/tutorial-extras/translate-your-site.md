---
sidebar_position: 2
---

# ترجمة موقعك

دعنا نترجم `docs/intro.md` إلى الفرنسية.

## إعداد i18n

عدّل `docusaurus.config.js` لإضافة دعم للغة `fr`:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## ترجمة مستند

انسخ ملف `docs/intro.md` إلى مجلد `i18n/fr`:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

ترجم `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` إلى الفرنسية.

## تشغيل موقعك المترجم

شغل موقعك باللغة الفرنسية:

```bash
npm run start -- --locale fr
```

موقعك المترجم متاح على [http://localhost:3000/fr/](http://localhost:3000/fr/) وصفحة `البدء` مترجمة.

:::caution

في التطوير، يمكنك استخدام لغة واحدة فقط في كل مرة.

:::

## إضافة قائمة منسدلة للغات

للتنقل بسلاسة عبر اللغات، أضف قائمة منسدلة للغات.

عدّل ملف `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

قائمة منسدلة اللغات تظهر الآن في شريط التنقل الخاص بك:

![قائمة منسدلة اللغات](./img/localeDropdown.png)

## بناء موقعك المترجم

ابنِ موقعك للغة محددة:

```bash
npm run build -- --locale fr
```

أو ابنِ موقعك ليشمل جميع اللغات دفعة واحدة:

```bash
npm run build
```

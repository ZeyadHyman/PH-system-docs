---
sidebar_position: 2
---

# إنشاء مستند

المستندات هي **مجموعات من الصفحات** متصلة من خلال:

- **شريط جانبي**
- **تنقل سابق/التالي**
- **إدارة الإصدارات**

## أنشئ أول مستند لك

أنشئ ملف Markdown في `docs/hello.md`:

```md title="docs/hello.md"
# مرحباً

هذا هو **أول مستند Docusaurus** لي!
```

المستند الجديد متاح الآن على [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## إعداد الشريط الجانبي

Docusaurus ينشئ **شريطاً جانبياً** تلقائياً من مجلد `docs`.

أضف بيانات وصفية لتخصيص تسمية الشريط الجانبي وموقعه:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'مرحباً!'
sidebar_position: 3
---

# مرحباً

هذا هو **أول مستند Docusaurus** لي!
```

من الممكن أيضاً إنشاء شريطك الجانبي بشكل صريح في `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'البرنامج التعليمي',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

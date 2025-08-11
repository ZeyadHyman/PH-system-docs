---
sidebar_position: 1
---

# إنشاء صفحة

أضف ملفات **Markdown أو React** إلى `src/pages` لإنشاء **صفحة مستقلة**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## أنشئ أول صفحة React لك

أنشئ ملف في `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>صفحة React الخاصة بي</h1>
      <p>هذه صفحة React</p>
    </Layout>
  );
}
```

الصفحة الجديدة متاحة الآن على [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## أنشئ أول صفحة Markdown لك

أنشئ ملف في `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# صفحة Markdown الخاصة بي

هذه صفحة Markdown
```

الصفحة الجديدة متاحة الآن على [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).

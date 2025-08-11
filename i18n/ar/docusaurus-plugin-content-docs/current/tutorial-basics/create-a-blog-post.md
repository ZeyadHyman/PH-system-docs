---
sidebar_position: 3
---

# إنشاء مقالة مدونة

Docusaurus ينشئ **صفحة لكل مقالة مدونة**، ولكن أيضاً **صفحة فهرس المدونة**، **نظام العلامات**، **تغذية RSS**...

## أنشئ أول مقالة لك

أنشئ ملف في `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: تحيات!
authors:
  - name: Joel Marcey
    title: المشارك في إنشاء Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: حافظ Docusaurus
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

تهانينا، لقد أنشأت أول مقالة لك!

لا تتردد في اللعب والتعديل على هذه المقالة كما تريد.
```

المقالة الجديدة متاحة الآن على [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).

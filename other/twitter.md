---
title: 网页中嵌入 Twitter 文章
description:
---

<PageHeader
  logo="/images/links/x.png"
  coverImg="/images/twitter/cover.jpeg"
  :links="links"
/>

## 生成代码步骤

- 去 Twitter 官网找到需要嵌入的文章
- 复制文章地址，粘贴到生成网站里面(https://publish.twitter.com/#)

<img src="/images/twitter/01.png" :class="$style.img" />
<img src="/images/twitter/02.png" :class="$style.img" />
<img src="/images/twitter/03.png" :class="$style.img" />

```
https://platform.twitter.com/embed/Tweet.html?dnt=true&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=1822969227550298196&lang=en&origin=https%3A%2F%2Fcdn.iframe.ly%2FvuPjDWW%3Fapp%3D1&sessionId=8e59a948f970b534435c72a247c82dae42224a9a&theme=light&widgetsVersion=2615f7e52b7e0%3A1702314776716&width=550px
```

<script setup>
const links = [
  { name: 'X', url: 'https://x.com/' },
  { name: '生成代码网址', url: 'https://publish.twitter.com/' },
  { name: 'Api', url: 'https://developer.x.com/en/docs/twitter-for-websites/oembed-api' },
]
</script>

<style module>
  .img {
    margin-top: 20px;
  }
</style>

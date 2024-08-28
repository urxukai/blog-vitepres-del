---
title: Solayer
description: Solayer 正在 Solana 上构建再质押网络。Solayer 利用其经济安全性和优质执行作为去中心化云基础设施，为应用程序开发人员实现更高程度的共识和区块空间定制。
---

<PageHeader
  logo="/images/solayer/logo.png"
  coverImg="/images/solayer/cover.png"
  :links="links"
/>

## 时间线

<el-timeline style="max-width: 600px">
  <el-timeline-item
    v-for="(activity, index) in activities"
    :key="index"
    :icon="activity.icon"
    :type="activity.type"
    :color="activity.color"
    :size="activity.size"
    :hollow="activity.hollow"
    :timestamp="activity.timestamp"
  >
    {{ activity.content }}
  </el-timeline-item>
</el-timeline>

> ① [Blockbeats](https://www.theblockbeats.info/flash/261379) [Twitter](https://x.com/solayer_labs/status/1828493462460867033)

<script setup>
const links = [
  { name: 'solayer.org', url: 'https://solayer.org/' },
  { name: 'X', url: 'https://x.com/solayer_labs' },
  { name: 'Doc', url: 'https://docs.solayer.org/getting-started/introduction' },
]

const activities = [
  {
    content: 'Solayer完成1200万美元种子轮融资，Polychain Capital领投①',
    timestamp: '2024 年 8 月 28 日 ',
  },
]
</script>

<style module>
</style>

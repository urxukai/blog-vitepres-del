---
title: DeBridge（$DBR）
description: deBridge是Web3的安全互操作性层，支持在不同区块链之间去中心化传输任意消息和值。跨链交易的验证由独立验证者组成的网络执行，这些验证者由deBridge治理选出并为deBridge治理工作。验证器维护区块链基础设施，每个验证器运行一个deBridge节点来签署通过不同区块链上的deBridge智能合约的所有交易。
head:
  - - script
    - src: https://platform.twitter.com/widgets.js
---

<PageHeader
  logo="/images/deBridge/logo.png"
  coverImg="/images/deBridge/cover.jpeg"
  :links="links"
/>

<el-timeline style="max-width: 600px">
  <el-timeline-item
    v-for="(activity, index) in activities"
    :key="index"
    :timestamp="activity.timestamp"
  >
    {{ activity.content }}
  </el-timeline-item>
</el-timeline>

## 代币经济学

<CoinModel :coinFinance="coinFinance" />

8 月 12 日，据官方消息，跨链互操作协议 deBridge 基金会宣布 DBR 代币分配资格查询页面已上线，代币总供应量为 100 亿枚，初始流通供应量为 18 亿枚。

第一期快照已于 2024 年 7 月 23 日成功完成

上线时的流通量：10% 用于社区和启动，5% 用于 deBridge 基金会，3% 用于生态系统。

剩余的 82% 将在代币生成事件（TGE）后 6 个月开始，每季度解锁一次，持续 3 年。

![代币分配](/images/deBridge/token.jpeg)

![社区分配](/images/deBridge/community.jpeg)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">1/ Introducing the deBridge Foundation and the DBR Checker <a href="https://t.co/PEcDBd8HVJ">pic.twitter.com/PEcDBd8HVJ</a></p>&mdash; deBridge Foundation (@deBridgeFdn) <a href="https://twitter.com/deBridgeFdn/status/1822969227550298196?ref_src=twsrc%5Etfw">August 12, 2024</a></blockquote>

## 关键事件

- 2022-02-17：deBridge 在主网上线
- 2021-09-07：deBridge 完成 550 万美元种子轮融资

<script setup>
const links = [
  { name: 'debridge.finance', url: 'https://debridge.finance/' },
  { name: 'Doc', url: 'https://docs.debridge.finance/' },
  { name: 'DApp', url: 'https://app.debridge.finance/' },
  { name: 'X', url: 'https://x.com/deBridgeFinance' },
  { name: 'Discord', url: 'https://discord.com/invite/debridge' },
  { name: 'Claim', url: 'https://debridge.foundation/' },
]
const coinFinance = [
  { label: '最大供应量', value: '10,000,000,000', },
  { label: '初始供应量', value: '1,800,000,000', },
  { label: '第一季空投', value: '17,500,000', },
]
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
</script>

<style module>
</style>

---
title: NX Finance($NX)
description: Solana 生态中第一个可组合的生息资产与积分空投的杠杆收益聚合器，帮助用户解锁 Solana 生态中每个生息资产的潜在收益并为每个积分空投参与者提供适合自己的收益策，作为 Solana DeFi 生态中的收益层。
outline: deep
---

<!-- head:
  - - script
    - src: https://platform.twitter.com/widgets.js -->

<PageHeader
  logo="/images/nxfinance/logo.png"
  coverImg="/images/nxfinance/cover.webp"
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

## `IDO` IS COMING

![IDO](/images/nxfinance/ido1.jpeg)

### 1. IDO 概述

IDO 将分为 2 轮，为期 4 天
参与者能够以固定价格购买 $NX 代币

![IDO](/images/nxfinance/ido.jpeg)

### 2. 白名单回合

本轮参与者将被优先购买 $NX 代币。先到先得的模式确保快速行动的白名单用户将获得他们的代币

用户可以在 IDO 日期前 1 天在 NX 官网查看自己的资格

- 日期：2024 年 9 月 2 日｜ 12:00PM UTC
- 持续时间：24 小时
- 分配：4300 SOL
- 每个代币的价格：0.00143 SOL
- 估值：2000 万（假设 SOL 为 140 美元）
- 模式：先到先得 (FCFS)
- 参与限制：每个钱包没有限制

合格：
2024 年 8 月 31 日中午 12:00 UTC 之前 NX 总积分超过 500K 的用户
来自社区的合格成员

### 3. 公开轮

在公开轮中，参与者可以贡献 SOL 来购买 $NX 代币

如果贡献超过最大上限，将应用溢出模型

- 日期：2024 年 9 月 3 日｜ 12:00PM UTC
- 持续时间：72 小时
- 分配：17150 SOL
- 每个代币的价格：0.00143 SOL
- 估值：2000 万（假设 SOL 为 140 美元）
- 资格：向所有人开放
- 型号：溢出
- 参与限制：每个钱包没有限制
- 代币分配：$NX 代币将根据每个参与者贡献的 SOL 数量按比例分配
- 退款：任何超过上限的 SOL 贡献将退还给贡献者

### 4. 资金使用

IDO 期间筹集的资金将分配给以下领域，以支持 NX Finance 的增长和可持续发展：

- 流动性供应：确保去中心化交易所有足够的流动性
- 开发：资助 NX 金融平台的持续开发和增强
- 营销：通过有针对性的活动扩大平台的认知度和采用率
- 储备金：为未来的战略举措和伙伴关系保留储备金

### 5. 代币生成

- 预计日期：2024 年 9 月 9 日｜ 12:00PM UTC

![IDO](/images/nxfinance/nadventure.jpeg)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/search?q=%24NX&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$NX</a> IDO is COMING<br><br>We’ve put everything into building a platform that redefines what’s possible in Solana<br><br>And now, we&#39;re about to enter the next phase of our PROMISE to community<br><br>This is the road to our extraordinary<br><br>In this post, we will list out all the details of IDO👇🏻 <a href="https://t.co/4mVIfj59c7">pic.twitter.com/4mVIfj59c7</a></p>&mdash; NX Finance ⚖️ (@NX_Finance) <a href="https://twitter.com/NX_Finance/status/1826945035604271273?ref_src=twsrc%5Etfw">August 23, 2024</a></blockquote>

<script setup>
import { MoreFilled } from '@element-plus/icons-vue'

const links = [
  { name: 'nxfinance.io', url: 'https://nxfinance.io/' },
  { name: 'X', url: 'https://x.com/NX_Finance' },
  { name: 'Gitbook', url: 'https://nx-finance.gitbook.io/nx-finance-whitepaper' },
]
const activities = [
  {
    content: '第 1 季代币分配',
    timestamp: '2024 年 9 月 18 日 ',
  },
  {
    content: '第 2 季开始',
    timestamp: '2024 年 9 月 10 日',
  },
  {
    content: '第 1 季快照​',
    timestamp: '2024 年 9 月 9 日​',
  },
  {
    content: '预售（公开轮）​',
    timestamp: '2024 年 9 月 3 日｜ 12:00PM UTC​',
  },
  {
    content: '预售（白名单轮）​',
    timestamp: '2024 年 9 月 2 日｜ 12:00PM UTC​',
  },
  {
    content: '最终 20% 提升',
    timestamp: '2024 年 8 月 26 日 - 2024 年 9 月 9 日',
  }
]
</script>

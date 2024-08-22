---
title: IO.NET（$IO）
description: Solana 生态中第一个可组合的生息资产与积分空投的杠杆收益聚合器，帮助用户解锁 Solana 生态中每个生息资产的潜在收益并为每个积分空投参与者提供适合自己的收益策，作为 Solana DeFi 生态中的收益层。
---

<PageHeader
  logo="/images/ionet/logo.png"
  coverImg="/images/ionet/cover.jpeg"
  :links="links"
/>

## 代币经济模型

<CoinModel :coinFinance="coinFinance" />

代币最大供应量 8 亿枚，初始总供应量 5 亿枚，初始流通量 9500 万枚（代币初始总供应量的 19%），Binance 挖矿总量 2000 万枚（代币初始总供应量的 4%）

- 第 1 季（截至 4 月 25 日）： 17,500,000（1750 万）
- 第 2 季 (5 月 1 日 - 5 月 31 日) ： 7,500,000（750 万）
- 第 3 季（6 月 1 日 - 6 月 30 日） ： 5,000,000（500 万）

## 挖矿收益计算（2024/7/9）

|   单价   |   2.24   |  统计时间  |  2024/7/9  |                |                  |
| :------: | :------: | :--------: | :--------: | -------------- | ---------------- |
|   CPU    | 每个区块 | 每天挖币数 | 每月挖币数 | 价值（人民币） | 磨损后价值(8 折) |
|    M2    |  0.094   |   2.256    |   67.68    | 1091.54304     | 873.23           |
|    M3    |  0.1179  |   2.8296   |   84.888   | 1369.073664    | 1095.26          |
|  M2 Pro  |  0.175   |    4.2     |    126     | 2032.128       | 1625.70          |
|  M3 Pro  |  0.176   |   4.224    |   126.72   | 2043.74016     | 1634.99          |
|  M2 Max  |  0.233   |   5.592    |   167.76   | 2705.63328     | 2164.51          |
|  M3 Max  |  0.2329  |   5.5896   |  167.688   | 2704.472064    | 2163.58          |
| M2 Ultra |  0.292   |   7.008    |   210.24   | 3390.75072     | 2712.60          |

<script setup>
const links = [
  { name: 'io.net', url: 'http://io.net' },
  { name: 'X', url: 'https://x.com/ionet' },
  { name: 'Doc', url: 'https://docs.io.net/docs/inception' },
  { name: 'Mint教程', url: 'https://mirror.xyz/maskpad.eth/1fyMaNu3LvVj0epOeLLCLXCn4V1IEmG562swGwBdBoAn' },
]
const coinFinance = [
  { label: '最大供应量', value: '800,000,000', },
  { label: '初始供应量', value: '95,000,000', },
  { label: '第一季空投', value: '17,500,000', },
]
</script>

<style module>
</style>

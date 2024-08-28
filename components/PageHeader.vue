<!--
 * @Author: 徐凯 xukai@sinoroad.com
 * @Date: 2024-08-13 13:30:23
 * @Description:
-->
<template>
  <div>
    <!-- 头部大图 -->
    <img v-if="coverImg" :src="coverImg" class="coverImg" />

    <!-- 页面标题 -->
    <h1 class="pageTitle">
      <img v-if="logo" :src="logo" class="logoIcon" />
      <span>{{ page.title }}</span>
    </h1>

    <!-- 简介 -->
    <div v-if="page.description" class="pageDescription">{{ page.description }}</div>

    <!-- 外部链接 -->
    <div class="linkContainer">
      <a v-for="link in links" :key="link.name" :href="link.url" target="_blank">
        <img :src="linksIconMap[link.name] || linksIconMap['Site']" alt="" />
        <span>{{ link.name }}</span>
      </a>
    </div>

    <div id="weibo"></div>
  </div>
</template>

<script setup name="PageHeader">
import { useData } from 'vitepress'
const props = defineProps(['logo', 'coverImg', 'links'])
const { page } = useData()

/**
 * 预设的外部链接的icon
 */
const linksIconMap = {
  Site: '/images/links/website.png',
  X: '/images/links/x.png',
  Doc: '/images/links/doc.png',
  WhitePaper: '/images/links/doc.png',
  Telegram: '/images/links/telegram.png',
  Gitbub: '/images/links/github.png',
  Blog: '/images/links/blog.png',
  Claim: '/images/links/airdrop.png',
  Discord: '/images/links/discord.png',
  DApp: '/images/links/dapp.png',
  Gitbook: '/images/links/gitbook.png'
}
</script>

<style scoped>
.coverImg {
  margin-bottom: 20px;
  width: 100%;
  /* height: 200px; */
  aspect-ratio: 3 / 1;
  object-fit: cover;
}
.logoIcon {
  display: inline-block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  border-radius: 20%;
}

/* 页面标题 */
.pageTitle {
  display: flex;
  align-items: center;
}
.pageDescription {
  margin-top: 5px;
  color: var(--vp-c-text-10);
}

/* 链接 */
.linkContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.linkContainer img {
  width: 18px;
  height: 18px;
}
.linkContainer a {
  display: flex;
  align-items: center;
  background: var(--vp-c-bg-10);
  margin: 10px 12px 10px 0;
  padding: 0 10px 0 10px;
  height: 30px;
  border-radius: 9px;
  color: var(--vp-c-text-11);
  font-size: 14px;
  font-weight: 500;
  text-decoration-line: none;
}
.linkContainer a:hover {
  color: #346ddb;
  text-decoration-line: underline;
}
</style>

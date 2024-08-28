<template>
  <article class="weibo-item">
    <div class="weibo-body">
      <!-- 头像、昵称。。。 -->
      <header class="weibo-body-top">
        <div style="position: relative">
          <img src="/images/weibo/avatar.jpg" alt="" class="weibo-avatar" />
          <img src="/images/weibo/vip.png" alt="" class="vip" />
        </div>
        <div class="weibo-body-top-info">
          <div class="screen_name">
            {{ weiboData.user.screen_name }}
            <img src="/images/weibo/vvip_4.png" alt="" class="vvip" />
          </div>
          <div class="source">
            <span>{{ getCreateTime(weiboData.created_at) }} 来自 {{ weiboData.source }} {{ weiboData.edit_count > 0 ? '已编辑' : '' }}</span>
          </div>
        </div>
      </header>

      <div class="region_name">
        {{ weiboData.region_name }}
      </div>

      <!-- 微博正文 -->
      <section class="weibo-content" v-html="weiboData.long_text_source || weiboData.text"></section>

      <!-- 微博图片 -->
      <div class="pic-box">
        <el-image
          v-for="(pic, key) in weiboData.pic_infos"
          :src="`${staticUrl}/weibo/${picPrefix}/${key}.jpg`"
          :preview-src-list="[`${staticUrl}/weibo/${picPrefix}/${key}.jpg`]"
          alt=""
          lazy
          class="pic-item"
          @click="onPreviewImg"
        />
      </div>
    </div>

    <!-- 底部 -->
    <footer class="weibo-footer">
      <div class="footer-item" @click="onShare">
        <el-image src="/images/weibo/share.png" alt="" class="footer-icon" />
        <span>{{ weiboData.reposts_count }}</span>
      </div>

      <div class="footer-item">
        <el-image src="/images/weibo/comment.png" alt="" class="footer-icon" />
        <span>{{ weiboData.comments_count }}</span>
      </div>

      <div class="footer-item">
        <el-image src="/images/weibo/like.png" alt="" class="footer-icon" />
        <span>{{ weiboData.attitudes_count }}</span>
      </div>
    </footer>
  </article>
</template>

<script setup name="weibo">
import { computed } from 'vue'
import dayjs from 'dayjs'
const props = defineProps(['weiboData', 'picPrefix'])

/**
 * 处理时间
 */
const getCreateTime = computed(() => {
  return time => {
    return dayjs(time).format('MM-DD HH:MM')
  }
})

const staticUrl = 'https://static.onev.top/'

const onPreviewImg = () => {}
</script>

<style scoped>
.weibo-item {
  margin: 30px auto;
  width: 640px;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 10px;
}
.weibo-body {
  padding: 16px 18px 0;
}

/* 头部：头像、昵称 */
.weibo-body-top {
  display: flex;
}
.weibo-avatar {
  margin-right: 10px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
.weibo-body-top .vip {
  position: absolute;
  right: 10px;
  bottom: 0;
  width: 16px;
  height: 16px;
}
.weibo-body-top-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 52px;
}
.weibo-body-top-info .screen_name {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-11);
  line-height: 21px;
  font-weight: bolder;
  font-size: 15px;
  margin-bottom: 6px;
}
.weibo-body-top-info .screen_name .vvip {
  margin-left: 8px;
  width: 38px;
  height: 14px;
}
.weibo-body-top-info .source {
  display: flex;
  width: 100%;
  color: #939393;
  font-size: 13px;
  line-height: 16px;
}

.region_name {
  color: #939393;
  font-size: 13px;
  line-height: 16px;
  padding-left: 62px;
  margin-bottom: 5px;
}

/** 微博正文 */
.weibo-content {
  /* padding-left: 62px; */
  color: var(--vp-c-text-11);
  font-size: 15px;
  line-height: 24px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* 图片 */
.pic-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  margin-top: 10px;
  /* padding-left: 62px; */
}
.pic-box .pic-item {
  width: 100%;
  /* height: 132px; */
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  object-fit: cover;
}

/* 底部：转发、评论、点赞 */
.weibo-footer {
  display: flex;
  margin: 0 15px;
  height: 40px;
}
.footer-item {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 14px;
  cursor: pointer;
}
.footer-item:hover {
  color: #ff8200;
}
.footer-icon {
  margin-right: 4px;
  width: 15px;
  height: 15px;
  font-weight: bold;
}

.img-preview {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 800px;
  height: 500px;
  background-color: #ff8200;
  overflow: hidden;
  z-index: 99;
}
</style>

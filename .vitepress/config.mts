/*
 * @Author: 徐凯 xukai@sinoroad.com
 * @Date: 2024-04-22 10:06:16
 * @Description:
 */
import { defineConfig } from 'vitepress'
import sidebar from './sidebar/index.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '小满即安Pro',
  description: '小满即安Pro',
  base: '/',
  cleanUrls: true, // 设置为true可以 从 URL 中删除 .html 后缀
  vite: {
    server: {
      proxy: {
        // 设置代理
        '/twitterUrl': {
          target: 'https://publish.twitter.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/twitterUrl/, '')
        }
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Crypto', link: '/crypto/projects/solana/ionet.md' },
      { text: 'Front End', link: '/frontend/vue/advanced/01' },
      { text: 'Weibo', link: '/weibo/2407-2408.md' },
      { text: 'Other', link: '/other/twitter.md' }
    ],

    sidebar: sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/urxukai' }],

    outline: {
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  async buildEnd(siteConfig) {
    console.log('构件结束的钩子')
  }
})

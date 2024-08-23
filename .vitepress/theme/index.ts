// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import './common.css'

// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 组件
import PageHeader from '../../components/PageHeader.vue'
import WeiBo from '../../components/WeiBo.vue'
import CoinModel from '../../components/CoinModel.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)

    // 注册自定义全局组件
    app.component('PageHeader', PageHeader)
    app.component('WeiBo', WeiBo)
    app.component('CoinModel', CoinModel)
  }
} satisfies Theme

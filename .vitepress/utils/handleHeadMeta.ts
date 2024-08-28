// 文章
// https://juejin.cn/post/7283708928348454949?searchId=202408261015305806628F2F6170496839
// https://www.toobug.net/article/web/2022/add-twitter-card-for-blog.html

// Twitter的卡片预览验证器
// https://cards-dev.twitter.com/validator

/**
 * Twitter的卡片预览
 */
import { type HeadConfig, type TransformContext } from 'vitepress'

// 处理每个页面的元数据
export function handleHeadMeta(context: TransformContext) {
  const twitterHead = handleTwitterHeadMeta(context)

  return [...twitterHead]
}

export function handleTwitterHeadMeta(context: TransformContext) {
  const { description, title, relativePath } = context.pageData
  // 增加Twitter卡片
  const ogUrl: HeadConfig = ['meta', { property: 'og:url', content: addBase(relativePath.slice(0, -3)) + '.html' }]
  const ogTitle: HeadConfig = ['meta', { property: 'og:title', content: title || '小满即安' }]
  const ogDescription: HeadConfig = ['meta', { property: 'og:description', content: description || context.description }]
  const ogImage: HeadConfig = ['meta', { property: 'og:image', content: 'https://blog.onev.top/images/nxfinance/logo.png' }]
  const twitterCard: HeadConfig = ['meta', { name: 'twitter:card', content: 'summary' }]
  const twitterImage: HeadConfig = ['meta', { name: 'twitter:image:src', content: 'https://blog.onev.top/images/nxfinance/logo.png' }]
  const twitterDescription: HeadConfig = ['meta', { name: 'twitter:description', content: description || context.description }]

  const widgets: HeadConfig = ['script', { scr: 'https://static.onev.top/js/widgets.js', type: 'text/javascript' }]

  const twitterHead: HeadConfig[] = [ogUrl, ogTitle, ogDescription, ogImage, twitterCard, twitterDescription, twitterImage, widgets]

  return twitterHead
}

export function addBase(relativePath: string) {
  const host = 'https://blog.onev.top'
  if (relativePath.startsWith('/')) {
    return host + relativePath
  } else {
    return host + '/' + relativePath
  }
}

/*
 * @Author: 徐凯 xukai@sinoroad.com
 * @Date: 2024-04-22 15:29:33
 * @Description:
 */
import { test } from './test'
import { frontend } from './frontend'
import { crypto } from './crypto'
import { weibo } from './weibo'
import { other } from './other'

export default {
  '/test/': test,
  '/frontend/': frontend,
  '/crypto/': crypto,
  '/weibo/': weibo,
  '/other/': other
}

/*
 * @Author: 徐凯 xukai@sinoroad.com
 * @Date: 2024-04-22 15:29:33
 * @Description:
 */
import { test } from './test'
import { develop } from './develop'
import { crypto } from './crypto'
import { weibo } from './weibo'
import { other } from './other'

export default {
  '/test/': test,
  '/develop/': develop,
  '/crypto/': crypto,
  '/weibo/': weibo,
  '/other/': other
}

var https = require('https')
var fs = require('fs')
const postList = require('./public/json/2401-2406.json')

function init() {
  let time = 0
  postList.forEach(postObj => {
    setTimeout(() => {
      downloadImage(postObj)
    }, time)
    time += 100
  })
}

/**
 * 下载图片
 * @param {*} postObj
 */
function downloadImage(postObj) {
  for (const name in postObj.pic_infos) {
    const el = postObj.pic_infos[name]
    let url = ''
    if (el.original) {
      url = el.original.url
    }
    saveImage(url, './public/images/weibo/2401-2406/' + name + '.jpg')
  }
}

/**
 * 保存图片
 * @param {*} url 图片地址
 * @param {*} path 保存路劲
 */
function saveImage(url, path) {
  https.get(url, function (req, res) {
    var imgData = ''
    req.on('data', function (chunk) {
      imgData += chunk
    })
    req.setEncoding('binary')
    req.on('end', function () {
      fs.writeFile(path, imgData, 'binary', function (err) {
        if (!err) {
          console.log('保存图片成功' + path)
        } else {
          console.log('保存图片失败', err)
        }
      })
    })
  })
}

init()

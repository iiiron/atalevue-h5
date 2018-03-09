/**
 * author 万相明
 */

import lodash from 'lodash'

var weLodash = {}

weLodash.parseToString = function (obj) {
  obj = lodash.cloneDeep(obj)

  lodash.forOwn(obj, (value, index) => {
    if (lodash.isObject(value)) {
      this.parseToString(value)
    } else {
      lodash.update(obj, index, function (v) {
        return String(v)
      })
    }
  })

  return obj
}

weLodash.getUrlParam = function (name) {
  var s = decodeURI(window.location.href)
  var reg = new RegExp('(\\?|&)' + name + '=([^&]*)(&|$)')
  var r = s.match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return null
}

weLodash.random = function (min = 0, max = 1, coeLine = 0.5, coeRange = 0, coeTimes = 1) {
  var top = coeLine + coeRange / 2
  var bottom = coeLine - coeRange / 2

  var range
  for (var i = 0; i < coeTimes; i++) {
    range = Math.random()
    if (bottom <= range && range <= top) {
      break
    }
  }
  return range * (max - min) + min
}

weLodash.dateFormat = function (mdate, fmt) {
  if (typeof mdate === 'string') {
    mdate = mdate.replace(/-/g, '/')
    mdate = mdate.substring(0, (mdate.indexOf('.') === -1 ? mdate.length : mdate.indexOf('.')))
    mdate = new Date(mdate)
  } else if (mdate === undefined) {
    mdate = new Date()
  }
  var o = {
    'M+': mdate.getMonth() + 1,
    'd+': mdate.getDate(),
    'h+': mdate.getHours(),
    'm+': mdate.getMinutes(),
    's+': mdate.getSeconds(),
    'q+': Math.floor((mdate.getMonth() + 3) / 3),
    'S': mdate.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (mdate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

export default weLodash

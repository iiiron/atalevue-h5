/**
 * weStorage的存在可以隔离存储方式的变化对上层的影响，还可以对存储过程做
 * 统一处理。
 * @return {[type]} [description]
 * author 万相明
 */
var weStorage = {}

weStorage.set = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

weStorage.get = function (key) {
  var data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

weStorage.remove = function (key) {
  localStorage.removeItem(key)
}

weStorage.setToken = function (value) {
  this.set('token', value)
}

weStorage.getToken = function () {
  return this.get('token')
}

weStorage.removeToken = function () {
  this.remove('token')
}

export default weStorage

/**
 * 将get请求的参数拼接在地址栏后面
 */
export function paramParse (url, obj) {
  let tempUrl = url
  let index = 0
  for (const e in obj) {
    if (index === 0) {
      tempUrl += `?${e}=${obj[e]}`
    } else {
      tempUrl += `&${e}=${obj[e]}`
    }
    index++
  }
  return tempUrl
}

/**
 * 将时间戳转化为 YYYY_MM-DD hh:mm:ss格式
 */
export function timestampToTime (timestamp) {
  const date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}

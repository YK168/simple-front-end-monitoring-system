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

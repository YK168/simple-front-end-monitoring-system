import Request from '@/utils/request'
import { paramParse } from '../utils/utils'


/*////////////////////////////总览数据：//////////////////////////////////*/
/**
 * 获取PV、UV数据
 */
export function getPVandUVdata (data) {
  return Request.get(paramParse('api/get/access/total', data))
}
/**
 * 获取JS数据
 */
export function getJsErrorData (data) {
  return Request.get(paramParse('api/get/jserror/total', data))
}
/**
 * 获取API数据
 */
export function getAPIdata (data) {
  return Request.get(paramParse('api/get/apierror/total', data))
}
/**
 * 预留数据
 */
export function getInspeedData (data) {
  return Request.get(paramParse('api/get/access/total', data))
}

import Request from '@/utils/request'
import { paramParse } from '../utils/utils'

/* ////////////////////////////总览数据：////////////////////////////////// */
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

/**
 * 获取页面访问排行
 */
export function getAccessRank (data) {
  return Request.get(paramParse('api/get/access/rank', data))
}

/**
 * 获取页面访问PV_UV数据
 */
export function getAccessPV_UV (data) {
  return Request.get(paramParse('api/get/access/page', data))
}

/**
 * 按页面获取获取js报错信息
 */
export function getJSerrorByPage (data) {
  return Request.get(paramParse('/api/get/jserror/page', data))
}

/**
 * 按页面获取performance信息
 */
export function getperformanceByPage (data) {
  return Request.get(paramParse('/api/get/performance/page', data))
}

/**
 * 按页面获取sourceerror信息
 */
export function getSourceerrorByPage (data) {
  return Request.get(paramParse('/api/get/sourceerror/page', data))
}

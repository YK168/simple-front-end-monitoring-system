import Request from '@/utils/request'
import { paramParse } from '../utils/utils'

/**
 * 获取PV、UV数据
 */
export function getPVandUVdata (data) {
  return Request.get(paramParse('api/get/access/total', data))
}

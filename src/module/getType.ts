import { GetType } from '../../types/index'

/**
 * 获取值类型
 *
 * data 检测的值
 */
export default <GetType>function (data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

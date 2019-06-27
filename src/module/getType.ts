/**
 * 获取值类型
 *
 * data 检测的值
 */
export default function getType (data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

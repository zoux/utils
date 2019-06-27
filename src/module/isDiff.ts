import { getType } from '../index'
import { COMPLEX_TYPE_LIST } from '../constants/index'

/**
 * 值是否不同
 *
 * x 待比较的值甲
 * y 待比较的值乙
 */
export default function isDiff (x: any, y: any): boolean {
  const xType: string = getType(x)
  const yType: string = getType(y)

  // 数据类型不同，则两者不同
  if (xType !== yType) return true

  // 基本数据类型直接判断，复杂数据类型递归判断
  if (!COMPLEX_TYPE_LIST.includes(xType)) {
    return x !== y
  } else {
    return new Map()
      .set('object', __diffObject)
      .set('array', __diffArray)
      .get(xType)(x, y)
  }
}

function __diffObject (x, y): boolean {
  // 获取 keys
  const xKeys: string[] = Object.keys(x)
  const yKeys: string[] = Object.keys(y)

  // key 数量不同，则两者不同
  const xKeysLength: number = xKeys.length
  if (xKeysLength !== yKeys.length) return true

  // key 名称不同，则两者不同
  if (xKeys.sort() + '' !== yKeys.sort() + '') return true

  // key 相同，则判断 value
  for (let i: number = 0; i < xKeysLength; i += 1) {
    const key: string = xKeys[i]
    if (__diffHandler(x[key], y[key])) return true
  }

  // 判断结束，返回两者是相同的结果
  return false
}

function __diffArray (x, y): boolean {
  // 索引数量不同，则两者不同
  if (x.length !== y.length) return true

  // 索引数量相同，则判断 value
  for (let i: number = 0, length = x.length; i < length; i += 1) {
    if (__diffHandler(x[i], y[i])) return true
  }

  // 判断结束，返回两者是相同的结果
  return false
}

function __diffHandler (xValue, yValue): boolean {
  const xValueType: string = getType(xValue)
  const yValueType: string = getType(yValue)

  // value 数据类型不同，则两者不同
  if (xValueType !== yValueType) return true

  // value 数据类型相同，则判断值
  if (!COMPLEX_TYPE_LIST.includes(xValueType)) {
    return xValue !== yValue
  } else {
    return isDiff(xValue, yValue)
  }
}

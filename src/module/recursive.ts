import { Recursive, IAnyObject, IAnyArray } from '../../types/index'
import { getType } from '../index'
import { COMPLEX_TYPE_LIST } from '../constants/index'

/**
 * 递归执行函数
 *
 * data 递归的值
 * callback 执行的函数
 */
const recursive = <Recursive>async function (data, callback) {
  const dataType: string = getType(data)

  if (!COMPLEX_TYPE_LIST.includes(dataType)) {
    await callback(data)
  } else {
    return await new Map()
      .set('object', __objectHandler)
      .set('array', __arrayHandler)
      .get(dataType)(data, callback)
  }
}

export default recursive

async function __objectHandler (data: IAnyObject, callback: Function): Promise<void> {
  for (let key in data) {
    await recursive(data[key], callback)
  }
}

async function __arrayHandler (data: IAnyArray, callback: Function): Promise<void> {
  for (let value of data) {
    await recursive(value, callback)
  }
}

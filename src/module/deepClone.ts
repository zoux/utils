import { getType } from '../index'
import { COMPLEX_TYPE_LIST } from '../constants/index'
import { IAnyArray, IAnyObject } from '../../types/index'

/**
 * 深拷贝
 * target 被拷贝的数据
 */
export default function deepClone <T extends any>(target: T): T {
  if (!COMPLEX_TYPE_LIST.includes(getType(target))) {
    return target
  }

  const set = new WeakSet()
  set.add(target as (IAnyObject | IAnyArray))

  const result = Array.isArray(target) ? [] : {}
  const loopStack = [{
    parent: result,
    key: undefined,
    data: target
  }]

  while (loopStack.length) {
    const item = loopStack.pop()
    const { parent, key, data } = item

    // 初始化赋值目标。key 为 undefined 则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (key !== undefined) {
      res = res[key] = {}
    }

    for (const [key, value] of Object.entries(data)) {
      if (!COMPLEX_TYPE_LIST.includes(getType(value))) {
        res[key] = value
      } else {
        if (set.has(value)) {
          res[key] = value
        } else {
          loopStack.push({
            parent: res,
            key,
            data: value
          })
          set.add(value)
        }
      }
    }
  }

  return result as T
}

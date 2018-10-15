import { ERROR_PARAMS_MISS } from '../constants'

/**
 * 递归取值
 *
 * @param {Array}   originalList  原始数组
 * @param {String}  childrenKey   需要递归子级列表的 key
 * @param {String}  itemKey       项中所要取值的 key
 * @returns {Array}
 */
function recursive (originalList, childrenKey, itemKey) {
  const result = []

  if (!originalList || !childrenKey || !itemKey) {
    console.warn(ERROR_PARAMS_MISS)
    return result
  }

  originalList.forEach(item => {
    result.push(item[itemKey])
    const children = item[childrenKey]
    if (children && children.length) {
      result.push(...recursive(children, childrenKey, itemKey))
    }
  })
  return result
}

export default recursive

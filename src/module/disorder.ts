import { IAnyArray } from '../../types/index'

/**
 * 乱序
 *
 * list 需要被乱序的数组
 */
export default function disorder (list: IAnyArray): IAnyArray {
  for (let i: number = 0; i < list.length; i++) {
    const j: number = Math.floor(Math.random() * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }

  return list
}

/**
 * 原理：遍历数组元素，然后将当前元素与以后随机位置的元素进行交换
 *
 * 为什么不用 sort + Math.random() - 0.5 的方式？
 * 各浏览器排序的算法不同可能会造成差异。
 * 如，当待排序元素跟有序元素进行比较时，一旦确定了位置，就不会再跟位置前面的有序元素进行比较，所以就乱序的不彻底。
 * https://github.com/mqyqingfeng/Blog/issues/51
 */

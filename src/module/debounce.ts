import { IAnyArray } from '../../types/index'

/**
 * 防抖
 * func 需要包装的函数
 * delayTime 规定的延迟触发时间
 */
export default function debounce(func: Function, delayTime: number): Function {
  let timer
  return function (...params: IAnyArray): void {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, params)
    }, delayTime)
  }
}

import { IAnyArray, IAnyFunction } from '../../types/index'

export type WrapperFunction = (...params: IAnyArray) => void

/**
 * 防抖
 * func 需要包装的函数
 * delayTime 规定的延迟触发时间
 */
export default function debounce (func: IAnyFunction, delayTime: number): WrapperFunction {
  let timer
  return function (...params) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, params)
    }, delayTime)
  }
}

import { IAnyArray, IAnyFunction } from '../../types/index'

export type WrapperFunction = (...params: IAnyArray) => void

/**
 * 节流
 * func 需要包装的函数
 * delayTime 规定的延迟触发时间
 * mustTime 规定的必定触发时间
 */
export default function throttle (func: IAnyFunction, delayTime: number, mustTime: number): WrapperFunction {
  let timer
  let startTime: Date = new Date()
  return function (...params) {
    clearTimeout(timer)
    const currentTime: Date = new Date()
    if (currentTime.getTime() - startTime.getTime() >= mustTime) {
      func.apply(this, params)
      startTime = currentTime
    } else {
      timer = setTimeout(() => {
        func.apply(this, params)
      }, delayTime)
    }
  }
}

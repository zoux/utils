import { IAnyArray } from '../../types/index'

/**
 * 节流
 * func 需要包装的函数
 * delayTime 规定的延迟触发时间
 * mustTime 规定的必定触发时间
 */
export default function throttle(func: Function, delayTime: number, mustTime: number): Function {
  let timer
  let startTime: Date = new Date()
  return function (...params: IAnyArray): void {
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

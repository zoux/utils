import { IAnyArray, IAnyFunction } from '../../types/index'

export type WrapperFunction = (...params: IAnyArray) => Promise<Returns>
export type Data = any
export interface Returns {
  status: boolean
  data: Data
}

/**
 * 异步函数锁
 *
 * func 需要包装的异步函数
 * limitTime 事件执行的间隔时间。即使之前的函数已经执行完毕，也要等到间隔时间过后才允许执行下一个函数
 */
export default function asyncLock (func: IAnyFunction, limitTime?: number): WrapperFunction {
  let baseLock: boolean = false
  let startTime: Date

  return async function (...params) {
    const currentTime: Date = new Date()
    // 当存在 limitTime，且 startTime 存在时（即非首次执行包装函数），则进行间隔时间锁的判定
    const timeLock: boolean = limitTime > 0 && startTime && currentTime.getTime() - startTime.getTime() <= limitTime
    const returns: Returns = {
      status: false,
      data: null
    }

    if (baseLock || timeLock) return returns
    baseLock = true

    returns.status = true
    returns.data = await func.apply(this, params)

    baseLock = false
    startTime = currentTime

    return returns
  }
}

export interface IReturns {
    status: boolean;
    data: any;
}
/**
 * 异步函数锁
 *
 * func 需要包装的异步函数
 * limitTime 事件执行的间隔时间。即使之前的函数已经执行完毕，也要等到间隔时间过后才允许执行下一个函数
 */
export default function asyncLock(func: Function, limitTime?: number): Function;

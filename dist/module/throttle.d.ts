/**
 * 节流
 * func 需要包装的函数
 * delayTime 规定的延迟触发时间
 * mustTime 规定的必定触发时间
 */
export default function throttle(func: Function, delayTime: number, mustTime: number): Function;

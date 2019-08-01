export interface IAnyObject {
  [key: string]: any
}

export type IAnyArray = any[]
export type IAnyFunction = (...params: IAnyArray) => any

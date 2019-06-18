export interface IAnyObject {
  [key: string]: any
}

export type IAnyArray = any[]

export interface GetType {
  (data: any): string
}

export interface IsDiff {
  (x: any, y: any): boolean
}

export interface LoadJsSync {
  (jsSrc: string, attrAsync: boolean): Promise<void>
}

export interface PreloadImg {
  (imgSrcList: string[]): Promise<void>
}

export interface Recursive {
  (data: any, callback: Function): Promise<void>
}

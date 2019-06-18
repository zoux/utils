export interface LoadJsSync {
  (jsSrc: string, attrAsync: boolean): void
}

export interface PreloadImg {
  (imgSrcList: string[]): void
}

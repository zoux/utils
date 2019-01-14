export = Utils
export as namespace Utils

declare namespace Utils {
  function loadJsSync (jsSrc: string, attrAsync: boolean): void
  interface LoadJsSync {
    (jsSrc: string, attrAsync: boolean): void
  }

  function PreloadImg (imgSrcList: string[]): void
  interface PreloadImg {
    (imgSrcList: string[]): void
  }
}



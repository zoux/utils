import { LoadJsSync } from '../../types/index'

/**
 * js 同步加载
 *
 * jsSrc 同步加载的 js 地址
 * attrAsync 是否启用 sync
 */
export default <LoadJsSync>function (jsSrc, attrAsync = true) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = jsSrc
    script.async = !!attrAsync

    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      reject(`加载失败：${jsSrc}`)
    }

    document.head.appendChild(script)
  })
}

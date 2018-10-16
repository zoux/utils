import { ERROR_PARAMS_ERROR } from '../constants'

/**
 * js 同步加载
 *
 * @param {String} jsSrc      同步加载的 js 地址
 * @param {Boolean} attrAsync  是否启用 sync
 * @returns {Promise<any>}
 */
function loadJsSync (jsSrc, attrAsync = true) {
  return new Promise((resolve, reject) => {
    if (!jsSrc) {
      reject(new Error(ERROR_PARAMS_ERROR))
    } else {
      const script = document.createElement('script')
      script.src = jsSrc
      script.async = !!attrAsync

      script.onload = () => {
        resolve()
      }
      script.onerror = () => {
        reject(new Error(`加载失败：${jsSrc}`))
      }

      document.head.appendChild(script)
    }
  })
}

export default loadJsSync

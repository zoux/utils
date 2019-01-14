import Utils from '../../types'

/**
 * js 同步加载
 *
 * @param {String} jsSrc      同步加载的 js 地址
 * @param {Boolean} attrAsync  是否启用 sync
 * @returns {Promise<void>}
 */
const loadJsSync: Utils.LoadJsSync = function (jsSrc, attrAsync = true) {
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

export default loadJsSync

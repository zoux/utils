import Utils from '../../types'

/**
 * 图片预加载
 *
 * @param {Array} imgSrcList 预加载的图片地址列表
 * @returns {Promise<void>}
 */

const preloadImg: Utils.PreloadImg = function (imgSrcList) {
  return new Promise(resolve => {
    let loadedCount = 0
    const totalCount = imgSrcList.length

    imgSrcList.forEach(path => {
      const img = new Image()
      img.src = path

      // 如果图片被缓存，则直接返回缓存数据
      if (img.complete) {
        if (++loadedCount === totalCount) {
          resolve()
        }
      }

      img.onerror = img.onload = () => {
        if (++loadedCount === totalCount) {
          resolve()
        }
      }
    })
  })
}

export default preloadImg

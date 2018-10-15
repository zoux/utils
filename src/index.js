import preloadImg from './module/preloadImg'
import recursive from './module/recursive'

// js 同步加载
function loadJsSync () {
  console.log('loadJsSync')
}

const utils = {
  preloadImg,
  recursive
}

if (window && !window.utils) {
  window.utils = utils
}

export { preloadImg, recursive }

export default utils

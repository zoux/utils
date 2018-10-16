import loadJsSync from './module/loadJsSync'
import preloadImg from './module/preloadImg'
import recursive from './module/recursive'

const utils = {
  loadJsSync,
  preloadImg,
  recursive
}

if (window && !window.utils) {
  window.utils = utils
}

export { loadJsSync, preloadImg, recursive }

export default utils

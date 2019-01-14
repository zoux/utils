declare global {
  interface Window {
    utils: any
  }
}

import loadJsSync from './module/loadJsSync'
import preloadImg from './module/preloadImg'

const utils = { loadJsSync, preloadImg }
if (window && !window.utils) {
  window.utils = utils
}

export { loadJsSync, preloadImg }
export default utils

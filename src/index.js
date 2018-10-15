import recursive from './module/recursive'

// 图片预加载
function preloadImg () {
  console.log('preloadImg')
}

// js 同步加载
function loadJsSync () {
  console.log('loadJsSync')
}

export { recursive }

export default {
  recursive
}

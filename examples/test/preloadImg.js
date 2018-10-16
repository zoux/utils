import { preloadImg } from '../../src/index'

const imgSrcList = [
  'https://www.baidu.com/img/bd_logo1.png'
]

;(async () => {
  const result = await preloadImg(imgSrcList)

  const img = document.createElement('img')
  img.src = imgSrcList[0]
  document.body.appendChild(img)

  console.log('__preloadImg_result__', result)
})()

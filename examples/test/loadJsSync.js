import { loadJsSync } from '../../src/index'

const jsSrc = 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.min.js'

;(async () => {
  const result = await loadJsSync(jsSrc)

  console.log('__loadJsSync_result__', result)
})()

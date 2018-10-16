## Intro

个人开发总结的工具集


## Install
```shell
npm install @zouxin/utils -S
```


## Quick Start

全量引入

``` javascript
import utils from '@zouxin/utils'

utils.preloadImg(imgUrl)
```

按需引入

``` javascript
import { preloadImg } from '@zouxin/utils'

preloadImg(imgUrl)
```


## API

- js 同步加载 `utils.loadJsSync(jsSrc: String, attrAsync: Boolean)`
- 图片预加载 `utils.preloadImg(imgSrcList: Array)`
- 递归取值 `utils.recursive(originalList: Array, childrenKey: String, itemKey: String)`


## License

MIT

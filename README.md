## Intro

个人开发总结的工具函数集合。


## Install
```
npm install @zouxin/utils -S
```


## Quick Start

全量引入

``` javascript
import Utils from '@zouxin/utils'

Utils.preloadImg(imgSrcList)
```

按需引入

``` javascript
import { preloadImg } from '@zouxin/utils'

preloadImg(imgSrcList)
```


## API

- js 同步加载 `utils.loadJsSync(jsSrc: String, attrAsync: Boolean)`
- 图片预加载 `utils.preloadImg(imgSrcList: Array)`


## License

MIT

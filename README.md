# utils

一个工具函数集合。

## Install

```bash
npm install @zouxin/utils -S
```

## Quick Start

全量引入：

```javascript
import utils from '@zouxin/utils'

utils.getType(1) // number
```

按需引入：

```javascript
import { getType } from '@zouxin/utils'

getType(1) // number
```

## API

* 异步函数锁 `asyncLock (func: Function, limitTime?: number): Function`
* 防抖 `debounce(func: Function, delayTime: number): Function`
* 获取值类型 `getType (data: any): string`
* 值是否不同 `isDiff (x: any, y: any): boolean`
* js 同步加载 `LoadJsSync (jsSrc: string, attrAsync: boolean): Promise<void>`
* 图片预加载 `preloadImg (imgSrcList: string[]): Promise<void>`
* 递归执行函数 `recursive (data: any, callback: Function): Promise<void>`
* 节流 `throttle(func: Function, delayTime: number, mustTime: number): Function`


## License

MIT

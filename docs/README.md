---
home: true

heroText: utils
tagline: 📦 一个工具函数集合

actionText: 起步 →
actionLink: /guide/

features:
- title: 实用
  details: getType / isDiff / debounce / throttle... 涵盖了常用的工具函数。

footer: MIT Licensed | Copyright © 2019-present zoux
---

## 起步

### 安装

```bash
npm install @zouxin/utils -S
```

### 使用

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

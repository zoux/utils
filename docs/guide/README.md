---
sidebarDepth: 1
---

# API

## asyncLock - 异步函数锁

```typescript
export type WrapperFunction = (...params: IAnyArray) => Promise<Returns>
export type Data = any
export interface Returns {
  status: boolean
  data: Data
}

export default function asyncLock (func: IAnyFunction, limitTime?: number): WrapperFunction
```

## debounce - 防抖

```typescript
export type WrapperFunction = (...params: IAnyArray) => void

export default function debounce (func: IAnyFunction, delayTime: number): WrapperFunction
```

## getType - 获取值类型

```typescript
export default function getType (data: any): string
```

## isDiff - 值是否不同

```typescript
export default function isDiff (x: any, y: any): boolean
```

## loadJsSync - 同步加载 js

```typescript
export default async function loadJsSync (jsSrc: string, attrAsync: boolean): Promise<void>
```

## preloadImg - 图片预加载

```typescript
export default async function preloadImg (imgSrcList: string[]): Promise<void>
```

## recursive - 递归执行函数

```typescript
export default async function recursive (data: any, callback: IAnyFunction): Promise<void>
```

## sleep - sleep 函数

```typescript
export default async function sleep (time: number): Promise<void>
```

## throttle - 节流

```typescript
export type WrapperFunction = (...params: IAnyArray) => void

export default function throttle (func: IAnyFunction, delayTime: number, mustTime: number): WrapperFunction
```

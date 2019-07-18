---
sidebarDepth: 1
---

# API

## asyncLock - 异步函数锁


```typescript
asyncLock (func: Function, limitTime?: number): Function
```

## debounce - 防抖


```typescript
debounce (func: Function, delayTime: number): Function
```

## getType - 获取值类型


```typescript
getType (data: any): string
```

## isDiff - 值是否不同


```typescript
isDiff (x: any, y: any): boolean
```

## loadJsSync - 同步加载 js


```typescript
loadJsSync (jsSrc: string, attrAsync: boolean): Promise<void>
```

## preloadImg - 图片预加载


```typescript
preloadImg (imgSrcList: string[]): Promise<void>
```

## recursive - 递归执行函数


```typescript
recursive (data: any, callback: Function): Promise<void>
```

## throttle - 节流


```typescript
throttle (func: Function, delayTime: number, mustTime: number): Function
```

import { deepClone } from '../src/index'
import { IAnyObject } from '../types/index'

const obj: IAnyObject = { a: 1, b: { c: 2 }, d: Symbol('sean') }
obj.b.c = obj.b
obj.e = obj

console.log(
  deepClone(obj)
)

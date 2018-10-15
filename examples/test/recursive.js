import { recursive } from '../../src/index'

const originalList = [{
  code: '1',
  children: [{
    code: '2'
  }]
}]
const childrenKey = 'children'
const itemKey = 'code'

const result = recursive(originalList, childrenKey, itemKey)

console.log(result)

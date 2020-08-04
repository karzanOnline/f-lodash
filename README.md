# lodash-f

基于 lodash 实现上层的工具方法集

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

## findItem

> findItem(array, validateKey, validateValue, [targetKey]=undefined)

### “Array” 方法，根据指定的 key 和 value 循环数组得到目标数据后按规则取出，规则可不填

#### 参数

- array (Array): 数据源。
- validateKey (string): 需要循环验证的 key。
- validateValue (var): 需要循环验证的 value。
- [targetKey](string): 按规则取出。

```tsx
import { findItem } from 'lodash-f';

const arr = [
  { a: 1, b: 11 },
  { a: 2, b: 22 },
];

findItem(arr, 'a', 2, 'b');

// => 22
```

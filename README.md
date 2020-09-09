# lodash-f

基于 lodash 实现上层的工具方法集

沉淀的方法来源于日常的业务

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

// 运行结果  => 22
```

## getComboValues

> getComboValues(array, targetKey='value')

### “Array” 方法，循环数组根据指定的 targetKey 取出对应的值，并取得的值拼成一个新数组

#### 参数

- array (Array): 数据源。
- [targetKey](string): 按规则取出。

#### 取出数组内 b 的值，并拼成一个新数组

```tsx
import React from 'react';
import { getComboValues } from 'lodash-f';

const arr = [
  { a: 1, b: ['b1', 'b11'] },
  { a: 2, b: ['b2', 'b22'] },
];

getComboValues(arr, 'b');

// 运行结果 => ["b1","b11","b2","b22"]
```

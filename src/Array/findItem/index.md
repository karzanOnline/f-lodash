---
nav:
  title: components
  path: /components
---

## findItem

> findItem(array, validateKey, validateValue, [targetKey]=undefined)

### “Array” 方法，根据指定的 key 和 value 循环数组得到目标数据后按规则取出，规则可不填

#### 参数

- array (Array): 数据源。
- validateKey (string): 需要循环验证的 key。
- validateValue (var): 需要循环验证的 value。
- [targetKey](string): 按规则取出。

#### 取出符合条件的对象

```tsx
import React from 'react';
import { findItem } from 'lodash-f';

const arr = [
  { a: 1, b: 11 },
  { a: 2, b: 22 },
];

export default () => (
  <div>
    <h3>{`const arr = [{a: 1, b: 11}, {a: 2, b: 22}]`}</h3>
    <h3>{`findItem(arr, 'a', 2)`}</h3>

    <h3>运行结果 // => {JSON.stringify(findItem(arr, 'a', 2))}</h3>
  </div>
);
```

#### 取出符合条件的 value

```tsx
import React from 'react';
import { findItem } from 'lodash-f';

const arr = [
  { a: 1, b: 11 },
  { a: 2, b: 22 },
];

export default () => (
  <div>
    <h3>{`const arr = [{a: 1, b: 11}, {a: 2, b: 22}]`}</h3>
    <h3>{`findItem(arr, 'a', 2, 'b')`}</h3>

    <h3>运行结果 // => {JSON.stringify(findItem(arr, 'a', 2, 'b'))}</h3>
  </div>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle

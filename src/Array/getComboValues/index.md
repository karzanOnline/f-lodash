---
nav:
  title: components
  path: /components
---

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

export default () => (
  <div>
    <h3>{`const arr = [{a: 1, b: ['b1', 'b11']}, {a: 2, b: ['b2', 'b22']}]`}</h3>
    <h3>{`getComboValues(arr, 'b')`}</h3>
    <h3>运行结果 // => {JSON.stringify(getComboValues(arr, 'b'))}</h3>
  </div>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle

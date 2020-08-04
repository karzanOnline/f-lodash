import { get, isArray, isString } from 'lodash';

const findItem = (
  origin: Array<any>,
  validateKey: string,
  validateValue: any,
  targetKey?: string | undefined,
) => {
  if (!isArray(origin)) {
    throw new Error('传入数据结构非数组，请检查origin数据结构');
  }

  const targetValue = origin.filter(
    _ => get(_, `${validateKey}`) === validateValue,
  );

  if (!targetKey) {
    return get(targetValue, '[0]');
  }

  if (isString(targetKey)) {
    return get(targetValue, `[0].${targetKey}`);
  }

  // 这里兜底其他规则，按需求增加，比如function
  return get(targetValue, `[0].${targetKey}`);
};

export default findItem;

import { get, isArray } from 'lodash';

const getComboValues = (arr: any[], key: string = 'value') => {
  if (!isArray(arr)) {
    throw new Error('传入数据结构非数组，请检查 origin 数据结构');
  }

  return arr.reduce((init, current) => {
    const values = get(current, key);

    return [...init, ...values];
  }, []);
};

export default getComboValues;

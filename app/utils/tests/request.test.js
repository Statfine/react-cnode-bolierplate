import expect from 'expect';
import { camelToSnake } from '../request';

const testObj = {
  startTime: 2,
  pushobj: {
    innerKey: 'go',
  },
};

describe(' camel to snake ', () => {
  const expectResult = {
    start_time: 2,
    pushobj: {
      inner_key: 'go',
    },
  };
  expect(camelToSnake(testObj)).toEqual(expectResult);
});

import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../app';

test('should ArrayBufferConverter', () => {
  const aa = new ArrayBufferConverter();
  aa.load(getBuffer());

  expect(aa.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

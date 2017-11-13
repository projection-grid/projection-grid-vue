import foo from '../../src/utils/foo';

describe('foo', () => {
  test('is a function', () => {
    expect((typeof foo) === 'function').toBe(true);
  });
});


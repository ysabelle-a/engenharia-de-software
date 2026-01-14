const { soma } = require('../src/js/script');

test('soma 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});

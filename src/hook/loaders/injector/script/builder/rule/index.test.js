import lib from './index.js'

describe("ModularRocks Webpack script", () => {
  test("Empty scope returns empty object", () => {
    const expected = lib('/hello')({})
    expect(expected.resource).toEqual('/hello/build/placeholder');
    expect(expected.use[0].loader).toEqual('/hello/script');
    expect(expected.use[0].options).toEqual({opts: {}});
  });
});

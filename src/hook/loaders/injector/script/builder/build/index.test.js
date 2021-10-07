import lib from './index.js'
import bundler from '../../../../.././bundler'

describe("ModularRocks Webpack Build script", () => {
  test("", () => {
    expect(bundler.get('bundler')).toEqual([]);
  });
});

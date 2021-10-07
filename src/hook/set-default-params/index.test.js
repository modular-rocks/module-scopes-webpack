import lib from './index.js'

describe("ModularRocks Webpack set-default-params", () => {
  test("the default params are set", () => {
    const path = '/hello/world'
    const app = 'app'
    const result = lib({ path, app })
    const equal = {
      app: 'app',
      base: `${process.env.PWD}/hello/world/app`,
      dirname: `${process.env.PWD}/hello/world`,
      path: '/hello/world',
      pwd: process.env.PWD,
      "regex": /\.jsx?$/,
    }
    expect(result).toEqual(equal);
  });
})

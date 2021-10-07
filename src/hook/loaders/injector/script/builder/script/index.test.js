import fn from './index.js'
import traverse from '../../../../.././data/prepare/traverse'
import core from '@modular-rocks/core'
const { prepare } = core.features

const Faker = class FakeWebpack {
  constructor(resource, opts) {
    this.resource = resource
    this.query = {opts}
  }
}

const fakeSource = (source, opts, configUrl, raw, url) => {
  for (var key in opts._dirKeys) {
    opts._dirKeys[key] = opts._dirKeys[key].replace(opts.base, '.')
  }

  return `
let RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})
RocksWebpack.global.dir = require.context("${url}", true, ${opts.regex});\n\n${source}`
}

describe("ModularRocks Webpack script", () => {
  test("Empty scope returns empty object", () => {
    const url = `${__dirname}/test-files/initializer`
    const dirname = process.env.PWD
    const opts = { dirname, base: url, regex: /\.jsx?$/ }
    const fake = new Faker(url, opts)

    const result = fn.call(fake, 'test source')

    const collection = traverse(opts.base, [])
    const { scoped, refined } = core.prepare(collection, opts)

    // data.store.set({ scope, raw })

    const expected = fakeSource('test source', opts, false, refined, url)
    expect(result).toEqual(expected);
  });
});

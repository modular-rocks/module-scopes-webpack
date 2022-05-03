import Script from './index.js'

const bundler = {
  get: () => ({})
}

describe("ModularRocks Webpack script", () => {
  test("Empty scope returns empty object", () => {
    const opts = {factories: ['Pages', 'Components'], app: 'index', bundler}
    const refined = {}
    const scoped = {}

    const { dirname, app, path, base, configUrl } = opts;

    const template = `
let RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})
if (!RocksWebpack || (RocksWebpack && !RocksWebpack.initialized)) {
  RocksWebpack.initialized = true;
  const opts = {"factories":["Pages","Components"]};
  opts.root = opts.root || "/Users/alexdollery/projects/modular-rocks-org/webpack";
  RocksWebpack.global.opts = opts;
  RocksWebpack.global.refined = {};
  RocksWebpack.global.scoped = {};
  RocksWebpack.global.dirKeys = {};
}\n`

    const done = Script({opts, refined, scoped})
    expect(done).toEqual(template);
  });
});

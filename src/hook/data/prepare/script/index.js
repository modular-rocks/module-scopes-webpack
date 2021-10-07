export default ({ opts, refined, scoped }) => {
  const { dirname, types, app, path, base, configUrl, record, pack, folder, bundler } = opts;

  const _dirKeys  = opts.bundler.get('keys')

  for (var key in _dirKeys) {
    _dirKeys[key] = _dirKeys[key].replace(base, '.')
  }

  const cleaned = {
    types,
    record,
    configUrl,
    dirname,
    base,
    pack,
    folder,
    path
  }

  return `
let RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})
if (!RocksWebpack || (RocksWebpack && !RocksWebpack.initialized)) {
  RocksWebpack.initialized = true;
  const opts = ${JSON.stringify(cleaned)};
  opts.root = opts.root || "${process.env.PWD}";
  RocksWebpack.global.opts = opts;
  RocksWebpack.global.refined = ${JSON.stringify(refined)};
  RocksWebpack.global.scoped = ${JSON.stringify(scoped)};
  RocksWebpack.global.dirKeys = ${JSON.stringify(_dirKeys)};
}\n`

}

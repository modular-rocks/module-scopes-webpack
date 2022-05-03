import bundler from '../../.././bundler';
export default (function (_ref) {
  var opts = _ref.opts,
      refined = _ref.refined,
      scoped = _ref.scoped;
  var dirname = opts.dirname,
      factories = opts.factories,
      app = opts.app,
      path = opts.path,
      base = opts.base,
      configUrl = opts.configUrl,
      record = opts.record,
      pack = opts.pack,
      folder = opts.folder,
      bundler = opts.bundler;

  var _dirKeys = opts.bundler.get('keys');

  var dirKeys = {};

  for (var key in _dirKeys) {
    dirKeys[key] = _dirKeys[key].replace(base, '.');
  }

  var cleaned = {
    factories: factories,
    record: record,
    configUrl: configUrl,
    dirname: dirname,
    base: base,
    pack: pack,
    folder: folder,
    path: path
  };
  return "\nlet RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})\nif (!RocksWebpack || (RocksWebpack && !RocksWebpack.initialized)) {\n  RocksWebpack.initialized = true;\n  const opts = " + JSON.stringify(cleaned) + ";\n  opts.root = opts.root || \"" + process.env.PWD + "\";\n  RocksWebpack.global.opts = opts;\n  RocksWebpack.global.refined = " + JSON.stringify(refined) + ";\n  RocksWebpack.global.scoped = " + JSON.stringify(scoped) + ";\n  RocksWebpack.global.dirKeys = " + JSON.stringify(dirKeys) + ";\n}\n";
});
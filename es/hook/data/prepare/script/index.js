export default (function (_ref) {
  var opts = _ref.opts,
      refined = _ref.refined,
      scoped = _ref.scoped;
  var dirname = opts.dirname,
      types = opts.types,
      app = opts.app,
      path = opts.path,
      _dirKeys = opts._dirKeys,
      base = opts.base,
      configUrl = opts.configUrl,
      record = opts.record,
      pack = opts.pack,
      folder = opts.folder;

  for (var key in _dirKeys) {
    _dirKeys[key] = _dirKeys[key].replace(base, '.');
  }

  var cleaned = {
    types: types,
    _dirKeys: _dirKeys,
    record: record,
    configUrl: configUrl,
    dirname: dirname,
    base: base,
    pack: pack,
    folder: folder,
    path: path
  };
  return "\nlet RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})\nif (!RocksWebpack || (RocksWebpack && !RocksWebpack.initialized)) {\n  RocksWebpack.initialized = true;\n  const opts = " + JSON.stringify(cleaned) + ";\n  opts.root = opts.root || \"" + process.env.PWD + "\";\n  RocksWebpack.global.opts = opts;\n  RocksWebpack.global.refined = " + JSON.stringify(refined) + ";\n  RocksWebpack.global.scoped = " + JSON.stringify(scoped) + ";\n}\n";
});
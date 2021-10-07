import core from '@modular-rocks/core';
import './placeholder';
export default (function () {
  var _window$ModularRocksW = window.ModularRocksWebpack.global,
      dir = _window$ModularRocksW.dir,
      config = _window$ModularRocksW.config,
      opts = _window$ModularRocksW.opts,
      refined = _window$ModularRocksW.refined;

  if (config) {
    config.extensions && Object.keys(config.extensions).forEach(function (key) {
      core.extensions.add(key, config.extensions[key]);
    });
    core.store.set(opts.base, 'config', config);
  }

  core.wrap(refined, dir, opts);
  delete window['ModularRocksWebpack'];
});
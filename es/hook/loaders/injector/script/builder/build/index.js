import core from '@modular-rocks/core';
import builder from '../../builder';
import './placeholder';
export default (function () {
  var _window$ModularRocksW = window.ModularRocksWebpack.global,
      dir = _window$ModularRocksW.dir,
      config = _window$ModularRocksW.config,
      opts = _window$ModularRocksW.opts,
      refined = _window$ModularRocksW.refined,
      dirKeys = _window$ModularRocksW.dirKeys;
  opts.dir = dir;
  builder.set('dir', dir);
  builder.set('keys', dirKeys);

  if (config) {
    config.extensions && Object.keys(config.extensions).forEach(function (key) {
      core.extensions.add(key, config.extensions[key]);
    });
    core.store.set(opts.base, 'config', config);
  }

  core.wrap(refined, opts);
  delete window['ModularRocksWebpack'];
});
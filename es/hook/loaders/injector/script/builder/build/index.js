import core from '@modular-rocks/core';
import bundler from '../../../../.././bundler';
import './placeholder';
export default (function () {
  var _window$ModularRocksW = window.ModularRocksWebpack.global,
      dir = _window$ModularRocksW.dir,
      config = _window$ModularRocksW.config,
      opts = _window$ModularRocksW.opts,
      refined = _window$ModularRocksW.refined,
      dirKeys = _window$ModularRocksW.dirKeys; // opts.dir = dir

  bundler.set('dir', dir);
  bundler.set('keys', dirKeys);
  opts.bundler = bundler;

  if (config) {
    config.enhancers && Object.keys(config.enhancers).forEach(function (key) {
      core.enhancers.add(key, config.enhancers[key]);
    });
    core.store.set(opts.base, 'config', config);
  }

  core.wrap(refined, opts);
  delete window['ModularRocksWebpack'];
});
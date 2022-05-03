import core from '@modular-rocks/core'

import bundler from '../../../../.././bundler'

import './placeholder'

export default () => {
  const { dir, config, opts, refined, dirKeys } = window.ModularRocksWebpack.global
  // opts.dir = dir
  bundler.set('dir', dir)
  bundler.set('keys', dirKeys)
  opts.bundler = bundler

  if (config) {
    config.enhancers && Object.keys(config.enhancers).forEach(key => {
      core.enhancers.add(key, config.enhancers[key])
    });
    core.store.set(opts.base, 'config', config)
  }

  core.wrap(refined, opts);
  delete window['ModularRocksWebpack'];
}

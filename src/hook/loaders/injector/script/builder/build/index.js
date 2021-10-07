import core from '@modular-rocks/core'

import bundler from '../../../../.././bundler'

import './placeholder'

export default () => {
  const { dir, config, opts, refined, dirKeys } = window.ModularRocksWebpack.global
  opts.dir = dir
  bundler.set('dir', dir)
  bundler.set('keys', dirKeys)

  if (config) {
    config.extensions && Object.keys(config.extensions).forEach(key => {
      core.extensions.add(key, config.extensions[key])
    });
    core.store.set(opts.base, 'config', config)
  }

  core.wrap(refined, opts);
  delete window['ModularRocksWebpack'];
}

import core from '@modular-rocks/core'

import builder from '../../builder'

import './placeholder'

export default () => {
  const { dir, config, opts, refined, dirKeys } = window.ModularRocksWebpack.global
  opts.dir = dir
  builder.set('dir', dir)
  builder.set('keys', dirKeys)

  if (config) {
    config.extensions && Object.keys(config.extensions).forEach(key => {
      core.extensions.add(key, config.extensions[key])
    });
    core.store.set(opts.base, 'config', config)
  }

  core.wrap(refined, opts);
  delete window['ModularRocksWebpack'];
}

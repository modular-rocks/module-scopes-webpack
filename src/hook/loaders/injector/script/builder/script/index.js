import core from '@modular-rocks/core'
import api from '../../../../../../api'

const clean = (base) => base.slice(-1) == '/' && base.slice(0, -1) || base

const importConfig = (url, source) => {
  return `
import config from '${url}';
RocksWebpack.global.config = config;
` + `\n` + source
}

export default function(source, map, meta) {
  const { configUrl, base, regex } = this.query.opts
  const loc = this.resource || this.resourcePath

  if (configUrl) {
    source = importConfig(configUrl, source)
  }

  source =  `
let RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})
RocksWebpack.global.dir = require.context("${clean(base)}", true, ${regex});
` + `\n` + source

  source = api.initializers.call(source, map, loc, this.query.opts)
  return source
}

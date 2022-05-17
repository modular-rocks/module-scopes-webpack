import builder from './injector/script/builder'
const isNode = typeof module !== 'undefined' && module.exports
const dirname = () => isNode ? __dirname : ''
const path = require('path')

const injector = (opts) => {
  return {
    test: opts.injectorRegex,
    exclude: /node_modules/,
    include: [
      `${opts.base}/`,
    ],
    use: [
         {
           loader: dirname() + '/injector',
           options: { opts },
         }
    ],
  }
}

export default function(compiler, opts, added) {
  compiler.hooks.afterPlugins.tap('ModularRocksWebpackLoaders', (compiler) => {
    const rules = compiler.options.module.rules

    if (!added['injector']) {
      rules.push(injector(opts))
      added['injector'] = true
    }

    if (!added['builder']) {
      rules.push(builder.rule(opts))
      added['builder'] = true
    }
  })
}

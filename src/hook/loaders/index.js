export default function(compiler, opts) {
  compiler.hooks.afterPlugins.tap('ModularRocksWebpackResolvePath', (compiler) => {
    const resolve = compiler.options.resolve

    if (!resolve.fallback) {
      resolve.fallback = {}
    }

    resolve.fallback.fs = false;
    resolve.fallback.path = require.resolve("path-browserify")
  })
}

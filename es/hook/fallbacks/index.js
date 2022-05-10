export default function (compiler, opts) {
  compiler.hooks.afterPlugins.tap('ModularRocksWebpackResolvePath', function (compiler) {
    var resolve = compiler.options.resolve;

    if (!resolve.fallback) {
      resolve.fallback = {};
    }

    resolve.fallback.fs = false;
    resolve.fallback.path = require.resolve("path-browserify");
  });
}
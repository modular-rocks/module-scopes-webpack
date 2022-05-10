"use strict";

exports.__esModule = true;
exports["default"] = _default;

function _default(compiler, opts) {
  compiler.hooks.afterPlugins.tap('ModularRocksWebpackResolvePath', function (compiler) {
    var resolve = compiler.options.resolve;

    if (!resolve.fallback) {
      resolve.fallback = {};
    }

    resolve.fallback.fs = false;
    resolve.fallback.path = require.resolve("path-browserify");
  });
}

module.exports = exports.default;
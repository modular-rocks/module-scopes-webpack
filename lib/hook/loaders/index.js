"use strict";

exports.__esModule = true;
exports["default"] = _default;

var _builder = _interopRequireDefault(require("./injector/script/builder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isNode = typeof module !== 'undefined' && module.exports;

var dirname = function dirname() {
  return isNode ? __dirname : '';
};

var injector = function injector(opts) {
  return {
    test: /\.jsx/,
    exclude: /node_modules/,
    use: [{
      loader: dirname() + '/injector',
      options: {
        opts: opts
      }
    }]
  };
};

function _default(compiler, opts, added) {
  compiler.hooks.afterPlugins.tap('MyPlugin', function (compiler) {
    var rules = compiler.options.module.rules;

    if (!added['injector']) {
      rules.push(injector(opts));
      added['injector'] = true;
    }

    if (!added['builder']) {
      rules.push(_builder["default"].rule(opts));
      added['builder'] = true;
    }
  });
}

module.exports = exports.default;
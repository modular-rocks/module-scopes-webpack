"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = _interopRequireDefault(require("@modular-rocks/core"));

require("./placeholder");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _window$ModularRocksW = window.ModularRocksWebpack.global,
      dir = _window$ModularRocksW.dir,
      config = _window$ModularRocksW.config,
      opts = _window$ModularRocksW.opts,
      refined = _window$ModularRocksW.refined;

  if (config) {
    config.extensions && Object.keys(config.extensions).forEach(function (key) {
      _core["default"].extensions.add(key, config.extensions[key]);
    });

    _core["default"].store.set(opts.base, 'config', config);
  }

  _core["default"].wrap(refined, dir, opts);

  delete window['ModularRocksWebpack'];
};

exports["default"] = _default;
module.exports = exports.default;
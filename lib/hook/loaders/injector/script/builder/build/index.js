"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = _interopRequireDefault(require("@modular-rocks/core"));

var _bundler = _interopRequireDefault(require("../../../../.././bundler"));

require("./placeholder");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _window$ModularRocksW = window.ModularRocksWebpack.global,
      dir = _window$ModularRocksW.dir,
      config = _window$ModularRocksW.config,
      opts = _window$ModularRocksW.opts,
      refined = _window$ModularRocksW.refined,
      dirKeys = _window$ModularRocksW.dirKeys; // opts.dir = dir

  _bundler["default"].set('dir', dir);

  _bundler["default"].set('keys', dirKeys);

  opts.bundler = _bundler["default"];

  if (config) {
    config.decorators && Object.keys(config.decorators).forEach(function (key) {
      _core["default"].decorators.add(key, config.decorators[key]);
    });

    _core["default"].store.set(opts.base, 'config', config);
  }

  _core["default"].wrap(refined, opts);

  delete window['ModularRocksWebpack'];
};

exports["default"] = _default;
module.exports = exports.default;
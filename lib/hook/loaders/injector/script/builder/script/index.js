"use strict";

exports.__esModule = true;
exports["default"] = _default;

var _core = _interopRequireDefault(require("@modular-rocks/core"));

var _api = _interopRequireDefault(require("../../../../../../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clean = function clean(base) {
  return base.slice(-1) == '/' && base.slice(0, -1) || base;
};

var importConfig = function importConfig(url, source) {
  return "\nimport config from '" + url + "';\nRocksWebpack.global.config = config;\n" + "\n" + source;
};

function _default(source, map, meta) {
  var _this$query$opts = this.query.opts,
      configUrl = _this$query$opts.configUrl,
      base = _this$query$opts.base,
      regex = _this$query$opts.regex;
  var loc = this.resource || this.resourcePath;

  if (configUrl) {
    source = importConfig(configUrl, source);
  }

  source = "\nlet RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})\nRocksWebpack.global.dir = require.context(\"" + clean(base) + "\", true, " + regex + ");\n" + "\n" + source;
  source = _api["default"].initializers.call(source, map, loc, this.query.opts);
  return source;
}

module.exports = exports.default;
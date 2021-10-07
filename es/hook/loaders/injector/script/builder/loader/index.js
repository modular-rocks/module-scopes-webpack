import core from '@modular-rocks/core';
import api from '../../../../../../api';

var clean = function clean(base) {
  return base.slice(-1) == '/' && base.slice(0, -1) || base;
};

var importConfig = function importConfig(url, source) {
  return "\nimport config from '" + url + "';\nRocksWebpack.global.config = config;\n" + "\n" + source;
};

export default function (source, map, meta) {
  var _this$query$opts = this.query.opts,
      configUrl = _this$query$opts.configUrl,
      base = _this$query$opts.base,
      regex = _this$query$opts.regex;
  var loc = this.resource || this.resourcePath;

  if (configUrl) {
    source = importConfig(configUrl, source);
  }

  source = "\nlet RocksWebpack = window.ModularRocksWebpack || (window.ModularRocksWebpack = {global: {}})\nRocksWebpack.global.dir = require.context(\"" + clean(base) + "\", true, " + regex + ");\n" + "\n" + source;
  source = api.initializers.call(source, map, loc, this.query.opts);
  return source;
}
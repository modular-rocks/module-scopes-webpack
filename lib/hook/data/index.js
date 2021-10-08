"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _prepare = _interopRequireDefault(require("./prepare"));

var _add = _interopRequireDefault(require("./add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var meta = {
  name: 'AddDataForModularRocks',
  stage: 'PROCESS_ASSETS_STAGE_ADDITIONS'
};

var _default = function _default(compiler, opts) {
  var ConcatSource = compiler.webpack.sources.ConcatSource;
  compiler.hooks.make.tap('ModularRocksWebpackAddData', function (compilation) {
    var source = (0, _prepare["default"])(opts);
    var callback = (0, _add["default"])(compilation, source, ConcatSource);
    compilation.hooks.processAssets.tap(meta, callback);
  });
};

exports["default"] = _default;
module.exports = exports.default;
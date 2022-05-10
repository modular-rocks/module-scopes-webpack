"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _setDefaultParams = _interopRequireDefault(require("./set-default-params"));

var _fallbacks = _interopRequireDefault(require("./fallbacks"));

var _loaders = _interopRequireDefault(require("./loaders"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hook = /*#__PURE__*/function () {
  function Hook(opts) {
    if (opts === void 0) {
      opts = {};
    }

    this.opts = (0, _setDefaultParams["default"])(opts);
  }

  var _proto = Hook.prototype;

  _proto.apply = function apply(compiler) {
    (0, _fallbacks["default"])(compiler, this.opts);
    (0, _loaders["default"])(compiler, this.opts, {});
    (0, _data["default"])(compiler, this.opts);
  };

  return Hook;
}();

var _default = Hook;
exports["default"] = _default;
module.exports = exports.default;
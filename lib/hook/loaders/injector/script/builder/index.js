"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _build = _interopRequireDefault(require("./build"));

var _rule = _interopRequireDefault(require("./rule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isNode = typeof module !== 'undefined' && module.exports;

var dirname = function dirname() {
  return isNode ? __dirname : '';
};

_build["default"].rule = (0, _rule["default"])(dirname());
var _default = _build["default"];
exports["default"] = _default;
module.exports = exports.default;
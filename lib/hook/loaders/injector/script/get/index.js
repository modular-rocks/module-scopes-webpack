"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = require("@modular-rocks/core");

var _builder = _interopRequireDefault(require(".././builder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var invoked = false;

var invoke = function invoke() {
  (0, _builder["default"])();
  invoked = true;
};

var get = function get(root, scope) {
  if (!invoked) invoke();
  return (0, _core.get)(root, scope);
};

var _default = get;
exports["default"] = _default;
module.exports = exports.default;
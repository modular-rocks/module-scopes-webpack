"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = _interopRequireDefault(require("@modular-rocks/core"));

var _locate = _interopRequireDefault(require("./locate"));

var _script = _interopRequireDefault(require("./script"));

var _api = _interopRequireDefault(require("../../.././api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Injector = function Injector(source, map, meta) {
  var loc = this.resource || this.resourcePath;
  var scope = loc ? (0, _locate["default"])(loc, this.query.opts) : '/';
  source = _api["default"].injectors.call(source, map, loc, this.query.opts, scope);
  source = (0, _script["default"])(source, map, loc, this.query.opts, scope);
  return source;
};

var _default = Injector;
exports["default"] = _default;
module.exports = exports.default;
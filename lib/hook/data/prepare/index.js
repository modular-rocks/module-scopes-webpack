"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = _interopRequireDefault(require("@modular-rocks/core"));

var _traverse = _interopRequireDefault(require("./traverse"));

var _script = _interopRequireDefault(require("./script"));

var _save = _interopRequireDefault(require("./save"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(opts) {
  var collection = (0, _traverse["default"])(opts.base, []);

  var _core$prepare = _core["default"].prepare(collection, opts),
      scoped = _core$prepare.scoped,
      refined = _core$prepare.refined;

  return (0, _script["default"])((0, _save["default"])({
    scoped: scoped,
    refined: refined,
    opts: opts
  }));
};

exports["default"] = _default;
module.exports = exports.default;
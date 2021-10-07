"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _api = _interopRequireDefault(require("../../../../api"));

var _core = _interopRequireDefault(require("@modular-rocks/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(store) {
  _core["default"].store.set(store.opts.base, 'store', store);

  _api["default"].callbacks.call(store);

  return store;
};

exports["default"] = _default;
module.exports = exports.default;
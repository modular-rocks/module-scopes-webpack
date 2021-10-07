"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api"));

var _get = _interopRequireDefault(require("./hook/loaders/injector/script/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var isOnNodeJs = false;

if (typeof process != "undefined") {
  isOnNodeJs = true;
}

var obj = {
  api: _api["default"],
  get: _get["default"]
};

if (isOnNodeJs) {
  var Hook = require('./hook');

  obj = _extends({}, obj, {
    Hook: Hook
  });
}

var _default = obj;
exports["default"] = _default;
module.exports = exports.default;
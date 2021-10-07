function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var isOnNodeJs = false;

if (typeof process != "undefined") {
  isOnNodeJs = true;
}

import api from './api';
import get from './hook/loaders/injector/script/get';
var obj = {
  api: api,
  get: get
};

if (isOnNodeJs) {
  var Hook = require('./hook');

  obj = _extends({}, obj, {
    Hook: Hook
  });
}

export default obj;
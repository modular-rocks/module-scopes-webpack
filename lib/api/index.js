"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var store = {};

var add = function add(key) {
  return function (objs) {
    return objs && objs.map(function (o) {
      return store[key].push(o);
    });
  };
};

var get = function get(key) {
  return function () {
    return store[key];
  };
};

var Factory = function Factory(key, call) {
  store[key] = store[key] ? store[key] : store[key] = [];
  return {
    add: add(key),
    get: get(key),
    call: call(key)
  };
};

var callLoaders = function callLoaders(key) {
  return function (source, opts) {
    store[key].map(function (loader) {
      return source = loader(source, opts);
    });
    return source;
  };
};

var callbacks = Factory('callbacks', function (key) {
  return function (_store) {
    store.callbacks.map(function (callback) {
      return callback(_store);
    });
  };
});
var injectors = Factory('injectors', callLoaders);
var initializers = Factory('initializers', callLoaders);
var _default = {
  callbacks: callbacks,
  initializers: initializers,
  injectors: injectors
};
exports["default"] = _default;
module.exports = exports.default;
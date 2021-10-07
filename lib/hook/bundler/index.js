"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = require("@modular-rocks/core");

var clean = _core.tools.clean;
var store = {
  bundler: [],
  dir: undefined
};

var get = function get(key) {
  return store[key];
};

var set = function set(key, value) {
  return store[key] = value;
};

var resolvePath = function resolvePath(path) {
  return store.dir && store.dir.resolve(path) || path;
};

var removeRelativeDot = function removeRelativeDot(path) {
  return path[0] == '.' && path.substr(1) || path;
};

var extractScopedPath = function extractScopedPath(path, app) {
  var re = new RegExp('^' + app);
  store.keys[path] = path;
  return {
    scopedPath: path.match(re) ? path.replace(base, '') : path,
    fullpath: path
  };
};

var resolve = function resolve(path, opts) {
  var base = opts.base,
      app = opts.app;
  path = resolvePath(path);
  path = removeRelativeDot(path);
  return extractScopedPath(path, app);
};

var load = function load(meta, metadata, env) {
  var filepath = clean([metadata.absolutePath, meta.filename].join('/'));
  var key = store.keys[filepath];
  var fn = store.dir(filepath);

  if (!fn) {
    throw Error('Filename not found at ' + filepath);
  }

  return fn["default"] || fn;
};

var _default = {
  resolve: resolve,
  load: load,
  get: get,
  set: set
};
exports["default"] = _default;
module.exports = exports.default;
import { tools } from '@modular-rocks/core';
var clean = tools.clean;
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
  var keys = get('keys');
  keys[path] = path;
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

var find = function find(module) {
  return function fallback() {
    return (module["default"] || module).apply(null, arguments);
  };
};

var load = function load(meta, metadata, env) {
  var filepath = clean([metadata.absolutePath, meta.filename].join('/'));
  var keys = get('keys');
  var dir = get('dir');
  var key = keys[filepath];
  var module = dir(key);

  if (!module) {
    throw Error('Filename not found at ' + filepath);
  }

  try {
    if (module && !module["default"] && module.__esModule) {
      return find(module);
    }

    return module["default"] || module;
  } catch (error) {
    return find(module);
  }
};

export default {
  resolve: resolve,
  load: load,
  get: get,
  set: set
};
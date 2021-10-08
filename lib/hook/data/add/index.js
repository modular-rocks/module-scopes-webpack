"use strict";

exports.__esModule = true;
exports["default"] = exports.write = void 0;

var write = function write(entrypointName, source, assets, ConcatSource) {
  return function (_ref) {
    var name = _ref.name,
        files = _ref.files;
    if (entrypointName !== name) return;
    var filename = Array.from(files).filter(function (x) {
      return x.match('js');
    })[0];
    var _source = assets[filename]._source;
    assets[filename]._source = new ConcatSource(source, _source);
  };
};

exports.write = write;

var _default = function _default(compilation, source, ConcatSource) {
  return function (assets) {
    compilation.entrypoints.forEach(function (entrypoint, name) {
      entrypoint.chunks.map(write(name, source, assets, ConcatSource));
    });
  };
};

exports["default"] = _default;
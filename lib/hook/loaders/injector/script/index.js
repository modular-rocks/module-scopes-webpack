"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(source, map, loc, opts, scope) {
  if (opts && opts.injector) {
    return opts.injector(source, map, loc, opts, scope);
  }

  return "\nimport WebRocks from '@modular-rocks/webpack';\nlet scope = WebRocks.get('" + opts.base + "', '" + scope + "');\n  \n" + source;
};

exports["default"] = _default;
module.exports = exports.default;
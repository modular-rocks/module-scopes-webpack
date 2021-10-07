"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(source, map, loc, opts, scope) {
  if (opts.injector) {
    return opts.injector(source, map, loc, opts, scope);
  }

  return "\n    import WebRocks from '@modular-rocks/webpack';\n    let scope = WebRocks.get('" + opts.base + "', '" + scope + "');\n  \n" + source;
};

exports["default"] = _default;
module.exports = exports.default;
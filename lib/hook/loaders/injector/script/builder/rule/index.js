"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(dirname) {
  return function (opts) {
    return {
      resource: dirname + '/build/placeholder',
      exclude: /node_modules/,
      use: [{
        loader: dirname + '/script',
        options: {
          opts: opts
        }
      }]
    };
  };
};

exports["default"] = _default;
module.exports = exports.default;
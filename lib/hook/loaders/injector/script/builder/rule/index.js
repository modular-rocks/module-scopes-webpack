"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(dirname) {
  return function (opts) {
    console.log(2321321, dirname, dirname + '/build/placeholder');
    return {
      resource: dirname + '/build/placeholder',
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
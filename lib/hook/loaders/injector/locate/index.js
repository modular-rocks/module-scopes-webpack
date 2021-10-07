"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = require("@modular-rocks/core");

var parentScopePath = _core.tools.parentScopePath,
    clean = _core.tools.clean;

var _default = function _default(loc, _ref) {
  var dirname = _ref.dirname;
  var scope = parentScopePath(loc.replace(dirname, ""));
  return scope.length ? clean(dirname + "/" + scope + "/") : "/";
};

exports["default"] = _default;
module.exports = exports.default;
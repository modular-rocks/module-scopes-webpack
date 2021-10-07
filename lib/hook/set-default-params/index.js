"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _core = require("@modular-rocks/core");

var _api = require("../../api");

var _bundler = _interopRequireDefault(require("../../hook/bundler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clean = _core.tools.clean;

var _default = function _default(opts) {
  var path = opts.path,
      app = opts.app;
  opts.pwd = process.env.PWD;
  opts.dirname = process.env.PWD + path;
  opts.regex = opts.regex || /\.jsx?$/;
  var base = process.env.PWD + "/" + path + (app ? "/" + app : '');
  opts.base = clean(base);
  opts.bundler = _bundler["default"];

  _bundler["default"].set('keys', {});

  return opts;
};

exports["default"] = _default;
module.exports = exports.default;
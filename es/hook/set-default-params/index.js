import { tools } from '@modular-rocks/core';
import { api } from '../../api';
var clean = tools.clean;
import bundler from '../../hook/bundler';
export default (function (opts) {
  var path = opts.path,
      app = opts.app;
  opts.pwd = process.env.PWD;
  opts.dirname = process.env.PWD + path;
  opts.regex = opts.regex || /\.jsx?$/;
  var base = process.env.PWD + "/" + path + (app ? "/" + app : '');
  opts.base = clean(base);
  opts.bundler = bundler;
  bundler.set('keys', {});
  return opts;
});
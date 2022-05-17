import { tools } from '@modular-rocks/core';
import { api } from '../../api';
var clean = tools.clean;
import bundler from '../../hook/bundler';

var warn = function warn(option, value) {
  if (value && !value.source) return;
  var text = "You must add a regular expression as the " + option + " option. Received: ";
  console.warn(text, value);
};

export default (function (opts) {
  var path = opts.path,
      app = opts.app,
      regex = opts.regex,
      injectorRegex = opts.injectorRegex;
  warn('regex', regex);
  warn('injectorRegex', injectorRegex);
  opts.regex = regex && regex.source ? regex : /\.jsx?$/;
  opts.injectorRegex = injectorRegex && injectorRegex.source ? injectorRegex : opts.regex;
  opts.pwd = process.env.PWD;
  opts.dirname = process.env.PWD + path;
  var base = process.env.PWD + "/" + path + (app ? "/" + app : '');
  opts.base = clean(base);
  opts.bundler = bundler;
  bundler.set('keys', {});
  return opts;
});
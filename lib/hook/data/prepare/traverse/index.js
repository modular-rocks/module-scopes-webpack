"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var fs = require('fs');

var path = require('path');

var decide = function decide(fullpath, collection) {
  if (fs.lstatSync(fullpath).isDirectory()) {
    return traverse(fullpath, collection);
  }

  return collection.push(fullpath);
};

var traverse = function traverse(dir, collection) {
  if (!fs.existsSync(dir)) return [];
  fs.readdirSync(dir).forEach(function (file) {
    return decide(path.join(dir, file), collection);
  });
  return collection;
};

var _default = traverse;
exports["default"] = _default;
module.exports = exports.default;
var fs = require('fs');

var path = require('path');

var decide = function decide(fullpath, collection) {
  if (fs.lstatSync(fullpath).isDirectory()) {
    return traverse(fullpath, collection);
  }

  return collection.push(fullpath);
};

var traverse = function traverse(base, collection) {
  if (!fs.existsSync(base)) return [];
  fs.readdirSync(base).forEach(function (file) {
    return decide(path.join(base, file), collection);
  });
  return collection;
};

export default traverse;
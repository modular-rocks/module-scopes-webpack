const fs = require('fs')
var path = require('path')

const decide = (fullpath, collection) => {
  if (fs.lstatSync(fullpath).isDirectory()) {
    return traverse(fullpath, collection)
  }
  return collection.push(fullpath)
}

const traverse = (base, collection) => {
  if (!fs.existsSync(base)) return []
  fs.readdirSync(base).forEach(file => decide(path.join(base, file), collection))
  return collection
}

export default traverse

import builder from './injector/script/builder';
var isNode = typeof module !== 'undefined' && module.exports;

var dirname = function dirname() {
  return isNode ? __dirname : '';
};

var path = require('path');

var injector = function injector(opts) {
  return {
    test: opts.injectorRegex,
    exclude: /node_modules/,
    include: [opts.base + "/"],
    use: [{
      loader: dirname() + '/injector',
      options: {
        opts: opts
      }
    }]
  };
};

export default function (compiler, opts, added) {
  compiler.hooks.afterPlugins.tap('ModularRocksWebpackLoaders', function (compiler) {
    var rules = compiler.options.module.rules;

    if (!added['injector']) {
      rules.push(injector(opts));
      added['injector'] = true;
    }

    if (!added['builder']) {
      rules.push(builder.rule(opts));
      added['builder'] = true;
    }
  });
}
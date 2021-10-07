import builder from './injector/script/builder';
var isNode = typeof module !== 'undefined' && module.exports;

var dirname = function dirname() {
  return isNode ? __dirname : '';
};

var injector = function injector(opts) {
  return {
    test: /\.jsx/,
    exclude: /node_modules/,
    use: [{
      loader: dirname() + '/injector',
      options: {
        opts: opts
      }
    }]
  };
};

export default function (compiler, opts, added) {
  compiler.hooks.afterPlugins.tap('MyPlugin', function (compiler) {
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
export default (function (dirname) {
  return function (opts) {
    return {
      resource: dirname + '/build/placeholder',
      exclude: /node_modules/,
      use: [{
        loader: dirname + '/script',
        options: {
          opts: opts
        }
      }]
    };
  };
});
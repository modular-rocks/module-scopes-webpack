export default (function (dirname) {
  return function (opts) {
    return {
      resource: dirname + '/build/placeholder',
      use: [{
        loader: dirname + '/script',
        options: {
          opts: opts
        }
      }]
    };
  };
});
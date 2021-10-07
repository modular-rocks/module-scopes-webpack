export default (function (dirname) {
  return function (opts) {
    console.log(2321321, dirname, dirname + '/build/placeholder');
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
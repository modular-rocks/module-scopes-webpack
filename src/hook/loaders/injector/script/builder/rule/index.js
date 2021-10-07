export default (dirname) => (opts) => {
  return {
    resource: dirname + '/build/placeholder',
    exclude: /node_modules/,
    use: [
         {
           loader: dirname + '/script',
           options: { opts },
         }
    ],
  }
}

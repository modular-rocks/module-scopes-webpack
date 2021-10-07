export default (dirname) => (opts) => {
  return {
    resource: dirname + '/build/placeholder',
    use: [
         {
           loader: dirname + '/script',
           options: { opts },
         }
    ],
  }
}

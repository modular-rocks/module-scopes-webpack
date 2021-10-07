import traverse from './index.js'

describe("ModularRocks webpack script", () => {
  test("Empty scope returns empty object", () => {
    const files = traverse(process.env.PWD + '/test-files/traverse', [])
    const file = files[0]

    const filename = file.replace(process.env.PWD, '')

    expect(filename).toEqual('/test-files/traverse/folder1/folder2/file.js');
  });
});

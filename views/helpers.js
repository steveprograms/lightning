let fs = require('fs')

// these are the same functions we use in the saveFileExists, but now we will
// export them so we can save or load our json from any file
// by doing `import {save, read} from '{path to }/helpers'`
// they are then called in a file by simply writing `save(data)` and `read()`
export function save(data) {
  fs.writeFileSync('./assets/data/user-data.json', JSON.stringify(data));
}

export function read() {
  return JSON.parse(fs.readFileSync('./assets/data/user-data.json'));
}

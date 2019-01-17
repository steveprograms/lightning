let fs = require('fs')

export function save(data) {
  fs.writeFileSync('./assets/data/user-data.json', JSON.stringify(data));
}

export function read() {
  return JSON.parse(fs.readFileSync('./assets/data/user-data.json'));
}

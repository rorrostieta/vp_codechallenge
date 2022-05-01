const fs = require('fs');

class Reader {
  static readJsonFile(filePath) {
    const rawData = fs.readFileSync(filePath);
    const partners = JSON.parse(rawData);
    return partners;
  }
}
module.exports = Reader;

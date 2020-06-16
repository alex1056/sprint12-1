const fsPromises = require('fs').promises;

async function readFile(pathToFile) {
  try {
    let stringData = await fsPromises.readFile(pathToFile, { encoding: 'utf8' });
    let objData = await JSON.parse(stringData);
    return objData;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = {
  readFile
};
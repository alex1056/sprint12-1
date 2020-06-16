const fsPromises = require('fs').promises;

async function readFile(pathToFile) {
  try {
    let stringData = await fsPromises.readFile(pathToFile, { encoding: 'utf8' });
    let objData = await JSON.parse(stringData);
    return objData;
    //console.log(objData);
  } catch (error) {
    console.log(error);
  }
}
// async function readFile(pathToFile) {
//   return await fsPromises.readFile(pathToFile, { encoding: 'utf8' })
//     .then((data) => {
//       return JSON.parse(data)
//     })
//     // .then((data) => {
//     //   // console.log(data);
//     //   return data;
//     // })
//     .catch(err => {
//       console.log(err);
//     });
// }

module.exports = {
  readFile
};
const path = require('path');
const { readFile } = require(path.join(__dirname, 'read-file.js'));


function filterUserById(usersObj, id) {
  return usersObj.filter((user) => {
    return user._id === id;
  })[0];
};




//readFile('../data/cards.json');
let result;
const url = '../data/users.json';
const id = 'f20c9c560aa652a72cba323f';

function fetchUserById(url, id) {
  return readFile(url)
    .then((data) => {
      //console.log(result);
      return filterUserById(data, id);

    });
}

// function fetchUsers(url) {
//   return readFile('../data/users.json')
//     .then((data) => {
//       //console.log(result);
//       return filterUserById(data, id);

//     });
// }

fetchUserById(url, id)
  .then((data) => {
    console.log(data);
  });



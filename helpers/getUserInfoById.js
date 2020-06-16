const path = require('path');
const { readFile } = require(path.join(__dirname, 'read-file.js'));


function getUserInfoById(usersObj, id) {
  return usersObj.filter((user) => {
    return user._id === id;
  })[0];
};

//readFile('../data/cards.json');
let result;

readFile('../data/users.json')
  .then((data) => {
    result = getUserInfoById(data, id = 'f20c9c560aa652a72cba323f');
    //console.log(result);
  });

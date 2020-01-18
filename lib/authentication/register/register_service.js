const UserRegister = require("../../model/user");

function saveUser(body, callback) {
  var user = new UserRegister(body);
  user.save(error => {
    if (error) {
      callback({ error: error.message });
    } else {
      callback(null);
    }
  });
}

function getUsers(callback) {
  UserRegister.find((err, users) => {
    if (err) {
      return callback(err);
    } else {
      return callback(users);
    }
  });
}

module.exports = { saveUser,getUsers };

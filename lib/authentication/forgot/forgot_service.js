const User = require("../../model/user");

function forgotUser(body, callback) {
  const query      = {};
        query.name = body.name;

  User.findOne(query, (err, user) => {
    if (err || user.length == 0) {
      callback(null);
    } else {
      callback(user);
    }
  });
}

module.exports = { forgotUser };

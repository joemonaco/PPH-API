const sql = require("./db.js");

//constructor
const User = function(user) {
  this.email = user.email;
  this.password = user.password;
  this.username = user.username;
};

User.findById = (userId, result) => {
  sql.query(`SELECT * FROM users WHERE idUsers = ${userId}`, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found pitcher: ", res[0]);
      result(null, res[0]);
      return;
    }

    //not found
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;

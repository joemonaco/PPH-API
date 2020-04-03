module.exports = app => {
  const users = require("../controllers/user.controller.js");

  //Retreive a single Pitcher with pitcherID
  app.get("/user/:userId", users.findOne);
};

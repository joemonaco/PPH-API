module.exports = app => {
  const pitchers = require("../controllers/pitchers.controller.js");

  //Retreive all Pitchers
  app.get("/pitchers", pitchers.findAll);

  //Retreive a single Pitcher with pitcherID
  app.get("/pitcher/:pitcherId", pitchers.findOne);

  //Get All Sessions by a Pitcher with pitcherID
  app.get("/sessions/all/:pitcherId", pitchers.findSessionsById);

  //Get max and average velocity for a single session
  app.get("/MaxAvg/one/:sessionID/:pitchType", pitchers.getMaxAvgPitchType);

  //Release Routes

  //Get Release values for all sessions of a pitcher with pitchtypes
  app.get("/release/all/:pitcherId/", pitchers.getRelease);

  //Get Release averages for all sessions of a pitcher grouped by pitchtype
  app.get("/releaseAvgs/all/:pitcherId/", pitchers.getReleaseAvgs);

  //Get Release values for a single session with pitchtypes
  app.get("/release/one/:sessionID/", pitchers.getReleaseSession);

  //Get Release averages for a single session of with pitchtypes
  app.get("/releaseAvgs/one/:sessionID/", pitchers.getReleaseAvgsSession);

  //Movement Routes

  //Get Movement values for all sessions of a pitcher with pitchtypes
  app.get("/movement/all/:pitcherId/", pitchers.getMovement);

  //Get Movement averages for all sessions of a pitcher grouped by pitchtype
  app.get("/movementAvgs/all/:pitcherId/", pitchers.getMovementAvgs);

  //Get Movement values for a single session with pitchtypes
  app.get("/movement/one/:sessionID/", pitchers.getMovementSession);

  //Get Movement averages for a single session of with pitchtypes
  app.get("/movementAvgs/one/:sessionID/", pitchers.getMovementAvgsSession);
};

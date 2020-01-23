module.exports = app => {
    const pitchers = require('../controllers/pitchers.controller.js');

    //Retreive all Pitchers
    app.get('/pitchers', pitchers.findAll);

    //Retreive a single Pitcher with pitcherID
    app.get('/pitchers/:pitcherId', pitchers.findOne);

    //Get All Sessions by a Pitcher with pitcherID
    app.get('/sessions/:pitcherId', pitchers.findSessionsById);
}
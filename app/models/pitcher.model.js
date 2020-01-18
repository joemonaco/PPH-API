const sql = require('./db.js');


//constructor
const Pitcher = function(pitcher) {
    this.name = pitcher.player_name;
    this.throws = pitcher.handedness;
    this.dob = pitcher.dob;
}

Pitcher.findById = (pitcherId, result) => {
    sql.query(`SELECT * FROM pitcher WHERE _id = ${pitcherId}`, (err, res) => {
        if(err) {
            console.log('error', err);
            result(err, null);
            return;
        }

        if(res.length) {
            console.log('found pitcher: ', res[0]);
            result(null, res[0]);
            return;
        }

        //not found
        result({kind: 'not_found'}, null);
    });
};

Pitcher.getAll = result => {
    sql.query("SELECT * FROM pitcher", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("customers: ", res);
      result(null, res);
    });
  };

module.exports = Pitcher;
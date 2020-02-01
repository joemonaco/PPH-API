const sql = require("./db.js");

//constructor
const Pitcher = function(pitcher) {
  this.name = pitcher.player_name;
  this.throws = pitcher.handedness;
  this.dob = pitcher.dob;
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

Pitcher.findById = (pitcherId, result) => {
  sql.query(`SELECT * FROM pitcher WHERE _id = ${pitcherId}`, (err, res) => {
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

Pitcher.getSessionsById = (pitcherId, result) => {
  sql.query(
    `SELECT * FROM session s where s.Pitcher__id = ${pitcherId} ORDER BY s.date DESC`,
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found session: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

Pitcher.getMaxAvgPitchType = (sessionID, pitchType, result) => {
  sql.query(
    `select AVG(speed), MAX(speed), Pitch_Type_pitchType from captured_data where sessionID=${sessionID} group by Pitch_Type_pitchType;`,
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found AVG and MAX: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

// Queries for release height and release side

Pitcher.getRelease = (pitcherId, pitchType, result) => {
  sql.query(
    `SELECT releaseHeight, releaseSide, Pitch_Type_pitchType
    FROM captured_data 
    WHERE Pitcher_pitcher_id=${pitcherId};`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found values: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

Pitcher.getReleaseAvgs = (pitcherId, pitchType, result) => {
  sql.query(
    `select AVG(releaseHeight), AVG(releaseSide), Pitch_Type_pitchType
  from captured_data 
  where Pitcher_pitcher_id=${pitcherId} 
  group by Pitch_Type_pitchType;`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found Averages: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

Pitcher.getReleaseSession = (sessionID, pitchType, result) => {
  sql.query(
    `SELECT releaseHeight, releaseSide, Pitch_Type_pitchType
    FROM captured_data 
    WHERE sessionID = ${sessionID};`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found Values for session ${sessionID}: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

Pitcher.getReleaseAvgsSession = (sessionID, pitchType, result) => {
  sql.query(
    `SELECT AVG(releaseHeight), AVG(releaseSide), Pitch_Type_pitchType
    FROM captured_data 
    WHERE sessionID = ${sessionID}
    GROUP BY Pitch_Type_pitchType;`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found Averages for session ${sessionID}: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

// Queries for vertical and horizontal break

Pitcher.getMovement = (pitcherId, pitchType, result) => {
  sql.query(
    `SELECT verticalBreak, horizontalBreak, Pitch_Type_pitchType
    FROM captured_data 
    WHERE Pitcher_pitcher_id=${pitcherId};`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found values: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

Pitcher.getMovementAvgs = (pitcherId, pitchType, result) => {
  sql.query(
    `select AVG(verticalBreak), AVG(horizontalBreak), Pitch_Type_pitchType
  from captured_data 
  where Pitcher_pitcher_id=${pitcherId} 
  group by Pitch_Type_pitchType;`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found Averages: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

Pitcher.getMovementSession = (sessionID, pitchType, result) => {
  sql.query(
    `SELECT verticalBreak, horizontalBreak, Pitch_Type_pitchType
    FROM captured_data 
    WHERE sessionID = ${sessionID};`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found Values for session ${sessionID}: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

Pitcher.getMovementAvgsSession = (sessionID, pitchType, result) => {
  sql.query(
    `SELECT AVG(verticalBreak), AVG(horizontalBreak), Pitch_Type_pitchType
    FROM captured_data 
    WHERE sessionID = ${sessionID}
    GROUP BY Pitch_Type_pitchType;`,
    (err, res) => {
      if (err) {
        console.log("Error ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Found Averages for session ${sessionID}: ", res);
        result(null, res);
        return;
      }

      //not found
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = Pitcher;

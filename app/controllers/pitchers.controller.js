const Pitcher = require("../models/pitcher.model.js");

//Retrieve all pitchers
exports.findAll = (req, res) => {
  Pitcher.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pitchers."
      });
    else res.send(data);
  });
};

//Find a single Pitcher with a pitcherID
exports.findOne = (req, res) => {
  Pitcher.findById(req.params.pitcherId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.pitcherId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.pitcherId
        });
      }
    } else res.send(data);
  });
};

exports.findSessionsById = (req, res) => {
  Pitcher.getSessionsById(req.params.pitcherId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Session with PitcherId ${req.params.pitcherId}.`
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Session with PitcherId " + req.params.pitcherId
        });
      }
    } else res.send(data);
  });
};

exports.getMaxAvgPitchType = (req, res) => {
  Pitcher.getMaxAvgPitchType(
    req.params.sessionID,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Session with ${req.params.sessionID}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Session with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getRelease = (req, res) => {
  Pitcher.getRelease(
    req.params.pitcherId,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found values for pitcher ${req.params.pitcherId}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving  with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getReleaseAvgs = (req, res) => {
  Pitcher.getReleaseAvgs(
    req.params.pitcherId,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Averages for pitcher ${req.params.pitcherId}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving  with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getReleaseSession = (req, res) => {
  Pitcher.getReleaseSession(
    req.params.sessionID,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Session with ${req.params.sessionID}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Session with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getReleaseAvgsSession = (req, res) => {
  Pitcher.getReleaseAvgsSession(
    req.params.sessionID,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Session with ${req.params.sessionID}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Session with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getMovement = (req, res) => {
  Pitcher.getMovement(
    req.params.pitcherId,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found values for pitcher ${req.params.pitcherId}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving  with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getMovementAvgs = (req, res) => {
  Pitcher.getMovementAvgs(
    req.params.pitcherId,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Averages for pitcher ${req.params.pitcherId}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving  with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getMovementSession = (req, res) => {
  Pitcher.getMovementSession(
    req.params.sessionID,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Session with ${req.params.sessionID}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Session with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.getMovementAvgsSession = (req, res) => {
  Pitcher.getMovementAvgsSession(
    req.params.sessionID,
    req.params.pitchType,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Session with ${req.params.sessionID}. or pitch type ${req.params.pitchType}`
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Session with PitcherId " + req.params.pitcherId
          });
        }
      } else res.send(data);
    }
  );
};

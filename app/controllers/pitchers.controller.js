const Pitcher = require('../models/pitcher.model.js');

//Retrieve all pitchers
exports.findAll = (req, res) => {
    Pitcher.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving pitchers."
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


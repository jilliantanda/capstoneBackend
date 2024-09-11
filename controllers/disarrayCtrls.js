const db = require("../models");

const getGoal = (req, res) => {
    db.Goal.find({}).then((foundGoal) => {
      if (!foundGoal) {
        res.status(404).json({ message: "Cannot find Goal" });
      } else {
        res.status(200).json({ data: foundGoal });
      }
    });
  };

const createGoal = (req, res) => {
  db.Goal.create(req.body).then((createdGoal) => {
    if (!createdGoal) {
      res.status(400).json({ message: "Cannot create Goal" });
    } else {
      res
        .status(201)
        .json({ data: createdGoal, message: "Goal Created" });
    }
  });
};

const updateGoal = (req, res) => {
  db.Goal.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedGoal) => {
      if (!updatedGoal) {
        res.status(400).json({ Message: "Could not update Goal" });
      } else {
        res
          .status(200)
          .json({ Data: updatedGoal, Message: "Goal updated" });
      }
    }
  );
};

const deleteGoal = (req, res) => {
  db.Goal.findByIdAndDelete(req.params.id).then((deletedGoal) => {
    if (!deleteGoal) {
      res.status(400).json({ Message: "Could not delete Goal" });
    } else {
      res
        .status(200)
        .json({ Data: deletedGoal, Message: "Goal deleted" });
    }
  });
};

module.exports = {
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
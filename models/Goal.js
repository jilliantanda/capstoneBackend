const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
    title: String,
    description: String,
    resources: String,
    active: Boolean,
})

const Goal = mongoose.model("Goal", GoalSchema)

module.exports = Goal
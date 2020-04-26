const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  description: String,
  repositoryURL: String,
  languages: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

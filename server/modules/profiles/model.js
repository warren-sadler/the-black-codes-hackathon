const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  isActive: Boolean,
  yearsActive: Number,
  role: String,
  picture: String,
  currentStatus: String,
  pronouns: String,
  company: String,
  website: String,
  socialMedia: String,
  bio: String,
  location: String,
  greeting: String,
});

const Profile = new mongoose.model("Profile", profileSchema);

module.exports = Profile;

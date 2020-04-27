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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Profile = new mongoose.model("Profile", profileSchema);

module.exports = Profile;

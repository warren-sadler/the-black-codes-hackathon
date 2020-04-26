const mongoose = require("mongoose");

/**
 * @type {Profile}
 * @property {boolean} isActive
 * @property {number} yearsActive
 * @property {string} role
 * @property {string} profilePictureURL
 * @property {string} currentStatus
 * @property {string} pronouns
 * @property {string} company
 * @property {string} website
 * @property {string} socialMedia
 * @property {string} bio
 * @property {string} location
 * @property {string} greeting
 * @property {string} userID
 */
const profileSchemaDefinition = {
  isActive: Boolean,
  yearsActive: Number,
  role: String,
  profilePictureURL: String,
  currentStatus: String,
  pronouns: String,
  company: String,
  website: String,
  socialMedia: String,
  bio: String,
  location: String,
  greeting: String,
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
};

const profileSchema = new mongoose.Schema(profileSchemaDefinition);

const Profile = new mongoose.model("Profile", profileSchema);

exports.Profile = Profile;
exports.profileSchemaKeys = Object.keys(profileSchemaDefinition);

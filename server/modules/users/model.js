const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  registeredTS: {
    type: Date,
    default: Date.now,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

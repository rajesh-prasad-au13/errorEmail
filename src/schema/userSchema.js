const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },

  Email: {
    type: String,
    require: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  Scale: {
    type: Number,
    require: true,
  },

  Where: {
    type: String,
    require: true,
  },

  What_time: {
    type: String,
    require: true,
  },

  Emotion: {
    type: Array,
    require: true,
  },

  Comment: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", userSchema);

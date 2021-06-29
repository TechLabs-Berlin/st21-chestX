const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    path: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("image", schema);

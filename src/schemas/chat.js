const mongoose = require("mongoose");

const { Schema } = mongoose;
const chatSchema = new Schema({
  user: { type: String },
  chat: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema, "Chat");

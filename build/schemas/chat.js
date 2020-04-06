"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var chatSchema = new Schema({
  user: {
    type: String
  },
  chat: String,
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model("Chat", chatSchema, "Chat");
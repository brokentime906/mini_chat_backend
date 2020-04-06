"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var todoSchema = new Schema({
  content: String,
  done: Boolean,
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = _mongoose["default"].model("Todo", todoSchema, "Todo");
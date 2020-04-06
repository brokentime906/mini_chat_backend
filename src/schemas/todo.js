import mongoose from "mongoose";

const { Schema } = mongoose;
const todoSchema = new Schema({
  content: String,
  done: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Todo", todoSchema, "Todo");

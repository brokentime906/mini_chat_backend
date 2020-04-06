var express = require("express");
var router = express.Router();
const Todo = require("../schemas/todo");
const Chat = require("../schemas/chat");
/* GET home page. */
router.get("/", async (req, res, next) => {
  console.log("router get / is here");
  const chats = await Chat.find({});
  console.log("chats", chats);
  return res.json(chats);
});

router.get("/paging", async (req, res, next) => {
  console.log("router get /paging is here");

  let todos;
  try {
    todos = await Todo.find({});
  } catch (e) {
    console.log(e);
  }
  res.json(todos);
});
router.post("/chat", async (req, res, next) => {
  console.log("router post : / is here");
  console.log(req.body);
  try {
    const chat = new Chat({ chat: req.body.chat });
    const newChat = await chat.save();
    req.app.get("io").emit("newChat", newChat);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;

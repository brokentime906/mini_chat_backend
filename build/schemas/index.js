"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv").config();

var _default = function _default() {
  var connect = function connect() {
    if (process.env.NODE_ENV !== "production") {
      _mongoose["default"].set("debug", true);
    }

    _mongoose["default"].connect("mongodb+srv://".concat(process.env.ACCOUNT_ID, ":").concat(process.env.ACCOUNT_PASSWORD, "@todolist-aline-5uznu.mongodb.net/test?retryWrites=true&w=majority"), {
      dbName: "TodoList",
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, function (err) {
      if (err) {
        console.log("몽고디비 연결 에러", err);
      } else {
        console.log("몽고디비 연결 성공");
      }
    });
  };

  connect();

  _mongoose["default"].connection.on("error", function (err) {
    console.error("몽고디비 연결 에러", err);
  });

  _mongoose["default"].connection.on("disconnected", function () {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재 시도합니다");
    connect();
  });

  require("./todo");

  require("./chat");
};

exports["default"] = _default;
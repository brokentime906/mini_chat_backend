"use strict";

var socketio = require("socket.io");

module.exports = function (server, app) {
  var io = socketio(server, {
    path: "/socket.io"
  });
  app.set("io", io);
  var chat = io.of("/chat");
  io.on("connection", function (socket) {
    var req = socket.request;
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("새로운 클라이언트 접속", ip, socket.id, req.ip);
    console.log("connected");
    console.log("conn info ", socket.request.connection._peername);
    socket.remoteAddress = socket.request.connection._peername.address;
    socket.on("init", function (data) {
      var name = data.name;
      socket.emit("welcome", {
        greet: "Hello Fucking"
      });
    });
    socket.on("newChat", function (data) {
      socket.emit("newChat", {
        id: 1,
        chat: "아녕새끼야",
        createdAt: "어 지금"
      });
    });
    socket.on("join", function () {
      socket.emit("join", [{
        id: 1,
        chat: "실행되는 react"
      }, {
        id: 2,
        chat: "gif챗 작동중"
      }]);
    });
  });
};
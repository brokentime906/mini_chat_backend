const socketio = require("socket.io");

module.exports = (server, app) => {
  const io = socketio(server, { path: "/socket.io" });
  app.set("io", io);

  const chat = io.of("/chat");
  io.on("connection", (socket) => {
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("새로운 클라이언트 접속", ip, socket.id, req.ip);
    console.log("connected");
    console.log("conn info ", socket.request.connection._peername);
    socket.remoteAddress = socket.request.connection._peername.address;
    socket.on("newChat", (data) => {
      socket.emit("newChat", {
        id: 1,
        chat: "아녕새끼야",
        createdAt: "어 지금",
      });
    });
    socket.on("join", () => {
      socket.emit("join", [
        { id: 1, chat: "실행되는 react" },
        { id: 2, chat: "gif챗 작동중" },
      ]);
    });
  });
};

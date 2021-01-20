require("dotenv/config");
const { response } = require("express");
const express = require("express");
const { report } = require("process");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("class-start", (data) => {
    const datetimestart = new Date();

    socket.on("disconnect", () => {
      const datetimefinish = new Date();
      
    });
  });
});
console.log(`running on port ${process.env.PORT}`);
server.listen(process.env.PORT);
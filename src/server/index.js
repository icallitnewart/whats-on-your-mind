const http = require('http');
const express = require('express');
const SocketIo = require('socket.io');
const app = express();
const port = 5005;

const server = http.createServer(app);
const io = SocketIo(server, {
  cors: {
    origin: "http://localhost:1234"
  }
});

io.on('connection', socket => {
  console.log(socket);
});

server.listen(port, () => console.log(`listening on port ${port}!`));
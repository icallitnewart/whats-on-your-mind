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
  socket['username'] = 'anonymous';

  //유저 프로필 설정
  socket.on('set_profile', (username, avatar, done) => {
    socket['username'] = username;
    socket['avatar'] = avatar;
    done();
  });

  //방 입장
  socket.on('enter_room', (roomName, done) => {
    socket.join(roomName);
    done();
  });
});

server.listen(port, () => console.log(`listening on port ${port}!`));
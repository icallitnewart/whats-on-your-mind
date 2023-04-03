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
  socket.onAny(event => {
    console.log(`socket event: ${event}`);
  });

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
    //console.log(io.sockets.adapter.rooms.get(roomName));

    //유저 입장 알리기
    const user = {
      id: socket.id,
      username: socket.username,
      avatar: socket.avatar,
    }
    io.to(roomName).emit('welcome', user);
  });

  //메시지 보내기
  socket.on('new_message', (msg, roomName, done) => {
    io.to(roomName).emit('update_message',
      {
        username: socket.username,
        avatar: socket.avatar
      },
      msg
    );
    done();
  });

  //퇴장 알리기
  socket.on('disconnecting', () => {
    const user = {
      id: socket.id,
      username: socket.username,
      avatar: socket.avatar,
    };
    socket.rooms.forEach(room => socket.to(room).emit('goodbye', user));
  });

  //퇴장하기
  socket.on('disconnect', () => {
    //추후 적용
    //socket.emit('leave_room');
  });
});

server.listen(port, () => console.log(`listening on port ${port}!`));
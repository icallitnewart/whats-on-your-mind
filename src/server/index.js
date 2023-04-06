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

const rooms = {};

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
  socket.on('enter_room', (room, done) => {
    socket.join(room);
    done();
    //const userList = io.sockets.adapter.rooms.get(room);

    const user = {
      id: socket.id,
      username: socket.username,
      avatar: socket.avatar,
      score: 0
    };

    //방 목록에 방 추가 및 입장한 방에 유저 정보 업데이트
    if (!rooms[room]) rooms[room] = [];
    rooms[room].push(user);

    //유저 입장 알리기
    io.to(room).emit('welcome', user);
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
    //방 정보에서 퇴장한 유저 제거
    for (const [room, sockets] of Object.entries(rooms)) {
      if (sockets.find(soc => soc.id === socket.id)) {
        rooms[room] = sockets.filter(soc => soc.id !== socket.id);

        //방에 아무도 남아있지 않다면 방 제거
        if (rooms[room].length === 0) delete rooms[room];
      }
    }
  });

  //방 목록 가져오기
  socket.on('get_rooms', () => {
    const roomList = Object.keys(rooms).map(room => {
      const [name, id] = room.split('?id=');
      return { name, id };
    });
    socket.emit('rooms', roomList);
  });

  //방에 속한 유저 정보 가져오기
  socket.on('get_users', (room) => {
    for (const [r, users] of Object.entries(rooms)) {
      if (r === room) socket.emit('users', users);
    }
  });
});

server.listen(port, () => console.log(`listening on port ${port}!`));
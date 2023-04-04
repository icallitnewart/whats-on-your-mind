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

function getRoomList() {
  const { sids, rooms } = io.sockets.adapter;
  const publicRooms = [];
  rooms.forEach((v, k) => {
    if (!sids.get(k)) {
      const [name, id] = k.split('?id=');
      publicRooms.push({ name, id });
    }
  });
  return publicRooms;
}

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
    //console.log(io.sockets.adapter.rooms.get(roomName));

    //유저 입장 알리기
    const user = {
      id: socket.id,
      username: socket.username,
      avatar: socket.avatar,
    }
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
    //방 목록 업데이트
    // io.sockets.emit('room_change', publicRooms);

    //추후 적용
    //socket.emit('leave_room');
  });

  //방 목록 가져오기
  socket.on('get_rooms', () => {
    const roomList = getRoomList();
    socket.emit('rooms', roomList);
  });
});

server.listen(port, () => console.log(`listening on port ${port}!`));
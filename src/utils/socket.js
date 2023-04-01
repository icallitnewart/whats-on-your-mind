const socket = io('http://localhost:5005');

export function enterRoom(roomName, done) {
  socket.emit('enter_room', roomName, done);
}
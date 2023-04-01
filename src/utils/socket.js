const socket = io('http://localhost:5005');

export function setProfile(username, avatar, done) {
  socket.emit('set_profile', username, avatar, done);
}

export function enterRoom(roomName, done) {
  socket.emit('enter_room', roomName, done);
}
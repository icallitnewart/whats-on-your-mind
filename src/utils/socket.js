import roomStore from "../store/room";
import chatStore from "../store/chat";

const socket = io('http://localhost:5005');

export function setProfile(username, avatar, done) {
  socket.emit('set_profile', username, avatar, done);
}

export function enterRoom(roomName, done) {
  socket.emit('enter_room', roomName, done);
}

export function updateUserList() {
  socket.on('welcome', (username, avatar) => {
    setTimeout(() => {
      const state = roomStore.state;
      state.isEnter = true;
      state.userList = [
        ...state.userList,
        { username, avatar }
      ];
    }, 0);
  });
}

//메시지 입력
export function submitMessage(msg) {
  const state = roomStore.state;
  socket.emit('new_message', msg, state.roomName, () => {
    //수정 필요
    // const state = chatStore.state;
    // const newChat = {
    //   username: profileStore.state.username,
    //   avatar: profileStore.state.avatar,
    //   msg
    // };
    // state.chats = [...state.chats, newChat];
  });
};

//채팅창에 메시지 업데이트
export function addMessage() {
  socket.on('update_message', (profile, msg) => {
    const state = chatStore.state;
    const newChat = {
      username: profile.username,
      avatar: profile.avatar,
      msg
    };
    state.chats = [...state.chats, newChat];
  })
}
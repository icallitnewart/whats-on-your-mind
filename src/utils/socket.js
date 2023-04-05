import roomStore, { exitRoom, publicRooms, usersInRoom } from "../store/room";
import chatStore from "../store/chat";

const socket = io('http://localhost:5005');

export function setProfile(username, avatar, done) {
  socket.emit('set_profile', username, avatar, done);
}

export function enterRoom(room, done) {
  socket.emit('enter_room', room, done);
}

export function leaveRoom() {
  socket.on('leave_room', exitRoom);
}

export function updateUserList() {
  //유저 입장
  socket.on('welcome', user => {
    setTimeout(() => {
      const { id, username, avatar } = user;
      const state = roomStore.state;
      state.isEnter = true;
      state.userList = [
        ...state.userList,
        user
      ];
      state.userListUpdate = {
        id, username, avatar, isEnter: true
      };
    }, 0);
  });

  //유저 퇴장
  socket.on('goodbye', user => {
    setTimeout(() => {
      const { id, username, avatar } = user;
      const state = roomStore.state;
      state.userList = state.userList.filter(user => user.id !== id);
      state.userListUpdate = {
        id, username, avatar, isEnter: false
      };
    }, 0);
  });
}

//메시지 입력
export function submitMessage(msg) {
  const state = roomStore.state;
  socket.emit('new_message', msg, state.room, () => {
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

//방 목록 생성
export function getRoomList() {
  socket.emit('get_rooms');
  socket.on('rooms', publicRooms);
}

//방에 속한 유저 정보 가져오기
export function getUserList(room) {
  socket.emit('get_users', room);
  socket.on('users', usersInRoom);
}
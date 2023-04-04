import { Store } from "../core";
import { enterRoom, leaveRoom } from "../utils/socket";

const roomStore = new Store({
  roomName: '',
  isEnter: false,
  userList: [],
  userListUpdate: {
    id: '',
    username: '',
    avatar: '',
    isEnter: null
  },
  roomList: []
});

export default roomStore;

export function createRoom() {
  const roomName = prompt('방 이름을 입력해 주세요.');

  if (roomName) {
    enterRoom(roomName, () => {
      roomStore.state.roomName = roomName;
      roomStore.state.isEnter = true;
      location.href = '/#/game';
    });
  } else {
    alert('방 이름을 입력하셔야 합니다.');
  }
}

export function publicRooms(rooms) {
  roomStore.state.roomList = rooms;
}

export function exitRoom() {
  const state = roomStore.state;
  //room state 초기화
  state.isEnter = false;
  state.roomName = '';
  state.userList = [];
  state.userListUpdate = {};
  console.log(state);
}
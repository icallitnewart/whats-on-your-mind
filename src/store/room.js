import { v4 as uuid } from "uuid";
import { Store } from "../core";
import { enterRoom, leaveRoom } from "../utils/socket";
import { changeRoute } from "./location";

const roomStore = new Store({
  room: '',
  roomName: '',
  roomId: '',
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

//새로운 방 생성
export function createRoom() {
  const roomName = prompt('방 이름을 입력해 주세요.');

  if (roomName) {
    const roomId = uuid();
    joinRoom(roomName, roomId);
  } else {
    alert('방 이름을 입력하셔야 합니다.');
  }
}

//방 입장
export function joinRoom(roomName, roomId) {
  const room = `${roomName}?id=${roomId}`;

  enterRoom(room, () => {
    roomStore.state.room = room;
    roomStore.state.roomName = roomName;
    roomStore.state.roomId = roomId;
    roomStore.state.isEnter = true;
    changeRoute('Game');
  });
}

//방 목록 보여주기
export function publicRooms(rooms) {
  roomStore.state.roomList = rooms;
}

//유저 목록 보여주기
export function usersInRoom(users) {
  roomStore.state.userList = users;
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
import { Store } from "../core";
import { enterRoom } from "../utils/socket";

const roomStore = new Store({
  roomName: '',
  isEnter: false
});

export default roomStore;

export function createRoom() {
  const roomName = prompt('방 이름을 입력해 주세요.');

  if (roomName) {
    enterRoom(roomName, () => {
      roomStore.state.isEnter = true;
      location.href = '/#/game';
    });
  } else {
    alert('방 이름을 입력하셔야 합니다.');
  }
}
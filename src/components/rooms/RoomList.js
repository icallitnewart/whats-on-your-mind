import { Component } from "../../core";
import roomStore, { joinRoom } from "../../store/room";
import { getRoomList } from "../../utils/socket";

export default class RoomList extends Component {
  constructor() {
    super();
    getRoomList();
    this.handleEvent();
    // roomStore.state.room = '';
    // roomStore.state.roomName = '';
    // roomStore.state.roomId = '';
    roomStore.subscribe('roomList', () => {
      this.render();
      this.handleEvent();
    });
  }

  render() {
    const roomList = roomStore.state.roomList;
    this.element.classList.add('room-list');
    this.element.innerHTML = roomList.length > 0
      ? `<ul></ul>`
      : `<p>Nobody's playing now. . .😢</p>`;

    if (roomList.length > 0) {
      const rooms = roomList.map(room => {
        const li = document.createElement('li');
        li.setAttribute('data-id', room.id);
        li.innerText = room.name;
        return li;
      });
      this.element.querySelector('ul').append(...rooms);
    }
  }

  handleEvent() {
    const rooms = this.element.querySelectorAll('.room-list ul li');
    const selectRoom = (e) => {
      const target = e.currentTarget;
      rooms.forEach(room => room.classList.remove('active'));
      target.classList.add('active');

      const roomName = target.innerText;
      const roomId = target.dataset.id;
      joinRoom(roomName, roomId);
    }

    rooms.forEach(room => room.addEventListener('click', selectRoom));
  }
}
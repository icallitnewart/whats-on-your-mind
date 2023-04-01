import { Component } from "../../core";
import roomStore from "../../store/room";

export default class RoomList extends Component {
  constructor() {
    super();
    this.handleEvent();
    roomStore.state.roomName = '';
  }

  render() {
    const roomNames = ['room1', 'room2', 'room3'];
    this.element.classList.add('room-list');
    this.element.innerHTML = roomNames.length > 0
      ? `<ul></ul>`
      : `<p>Nobody's playing now. . .😢</p>`;

    if (roomNames.length > 0) {
      const rooms = roomNames.map(room => {
        const li = document.createElement('li');
        li.setAttribute('data-name', room);
        li.innerText = room;
        return li;
      });
      this.element.querySelector('ul').append(
        ...rooms
      );
    }
  }

  handleEvent() {
    const rooms = this.element.querySelectorAll('.room-list ul li');

    const selectRoom = (e) => {
      const target = e.currentTarget;
      rooms.forEach(room => room.classList.remove('active'));
      target.classList.add('active');

      const roomName = target.dataset.name;
      roomStore.state.roomName = roomName;
    }

    rooms.forEach(room => room.addEventListener('click', selectRoom));
  }
}
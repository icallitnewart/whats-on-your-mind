import { Component } from "../../core";

export default class RoomList extends Component {
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
}
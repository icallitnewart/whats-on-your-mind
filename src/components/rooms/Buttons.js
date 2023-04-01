import { Component } from "../../core";
import roomStore from "../../store/room";

export default class Buttons extends Component {
  constructor() {
    super();
    this.handleEvent();
    roomStore.subscribe('roomName', () => this.render());
  }

  render() {
    const roomName = roomStore.state.roomName;
    this.element.classList.add('btns');
    this.element.innerHTML = /* html */`
      <button id="newRoomBtn">New Room</button>
      <button 
        id="enterBtn" 
        disabled="${roomName ? false : true}"
        >Enter</button>
    `;
  }

  handleEvent() {
  }
}
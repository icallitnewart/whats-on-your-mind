import { Component } from "../../core";

export default class Buttons extends Component {
  constructor() {
    super();
    this.handleEvent();
  }

  render() {
    this.element.classList.add('btns');
    this.element.innerHTML = /* html */`
      <button id="newRoomBtn">New Room</button>
      <button id="enterBtn" disabled>Enter</button>
    `;
  }

  handleEvent() {
  }
}
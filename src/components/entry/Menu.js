import { Component } from "../../core";
import { changeRoute } from "../../store/location";

export default class Menu extends Component {
  constructor() {
    super({
      tagName: 'nav'
    });
    this.handleEvent();
  }

  render() {
    this.element.innerHTML = /* html */`
      <ul>
        <li>
          <button id="playBtn">Play</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
      </ul>
    `;
  }

  handleEvent() {
    const playBtn = this.element.querySelector('#playBtn');
    playBtn.addEventListener('click', () => changeRoute('Profile'));
  }
}
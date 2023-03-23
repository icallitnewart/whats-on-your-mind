import { Component } from "../../core";

export default class Menu extends Component {
  constructor() {
    super({
      tagName: 'nav'
    });
  }

  render() {
    this.element.innerHTML = /* html */`
      <ul>
        <li>
          <button onclick="location.href='#/profile'">Play</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
      </ul>
    `;
  }
}
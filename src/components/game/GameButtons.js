import { Component } from "../../core";

export default class GameButtons extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });
  }

  render() {
    this.element.classList.add('game-btns');
    this.element.innerHTML = /* html */`
      <li>
        <button class="start-btn">START!</button>
      </li>
      <li>
        <button class="like-btn">
          <i class="fa-solid fa-heart"></i>
        </button>
      </li>
    `;
  }
}
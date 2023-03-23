import { Component } from "../../core";

export default class Buttons extends Component {
  render() {
    this.element.classList.add('btns');
    this.element.innerHTML = /* html */`
      <button onclick="history.go(-1)">Back</button>
      <button id="playBtn" onclick="location.href='/game.html'">Next</button>
    `;
  }
}
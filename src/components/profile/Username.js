import { Component } from "../../core";

export default class Username extends Component {
  render() {
    this.element.classList.add('username');
    this.element.innerHTML = /* html */`
      <label for="username">USERNAME</label>
      <input type="text" name="username" id="username" />
    `;
  }
}
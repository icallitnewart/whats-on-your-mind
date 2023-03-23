import { Component } from "../core";

export default class Entry extends Component {
  render() {
    this.element.innerHTML = /* html */`
      <h1>Hello World!</h1>
    `;
  }
}
import { Component } from "../../core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    });
  }

  render() {
    this.element.innerHTML = /* html */`
      <h1>Your Mind</h1>
    `;
  }
}
import { Component } from "../../core";

export default class Logo extends Component {
  constructor() {
    super({
      tagName: 'h1'
    });

    this.element.textContent = 'Your Mind';

    const span = document.createElement('span');
    span.innerText = 'What\'s on';
    this.element.prepend(span);
  }
}
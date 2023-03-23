import { Component } from "../../core";

export default class Word extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });
  }

  render() {
    const word = "test";
    const letters = [...word].reduce((acc, _cur) => {
      acc += `<li>?</li>`;
      return acc;
    }, '');

    this.element.classList.add('word');
    this.element.innerHTML = letters;
  }
}
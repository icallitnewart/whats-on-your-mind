import { Component } from "../../core";

export default class Timer extends Component {
  constructor() {
    super({
      tagName: 'span'
    });
  }

  render() {
    this.element.classList.add('timer');
    this.element.innerText = '02:00';
  }
}
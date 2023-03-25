import { Component } from "../../core";

export default class CanvasPaper extends Component {
  constructor() {
    super({
      tagName: 'canvas'
    });
  }

  render() {
    this.element.setAttribute('id', 'canvas');
  }
}
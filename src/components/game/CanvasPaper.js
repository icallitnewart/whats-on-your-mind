import { Component } from "../../core";

export default class CanvasPaper extends Component {
  render() {
    this.element.classList.add('canvas-paper');
  }
}
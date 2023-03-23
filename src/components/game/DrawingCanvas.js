import { Component } from "../../core";
import CanvasPaper from "./CanvasPaper";
import PaintTools from "./PaintTools";

export default class DrawingCanvas extends Component {
  render() {
    this.element.setAttribute('id', 'canvas');
    this.element.append(
      new CanvasPaper().element,
      new PaintTools().element
    );
  }
}
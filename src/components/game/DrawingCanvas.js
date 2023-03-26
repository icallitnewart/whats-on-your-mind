import { Component } from "../../core";
import CanvasPaper from "./CanvasPaper";
import PaintTools from "./PaintTools";
import PaintCanvas from "../../utils/PaintCanvas";

export default class DrawingCanvas extends Component {
  constructor() {
    super();
    this.handleEvent();
    new PaintCanvas({
      element: this.element,
      bindThis: this,
      canvas: '#canvas',
      brush: '.brush',
      clear: '.clear',
      eraser: '.eraser',
      width: 498,
      height: 453
    });
  }

  render() {
    this.element.classList.add('canvas-container');
    this.element.append(
      new CanvasPaper().element,
      new PaintTools().element
    );
  }
}
import { Component } from "../../core";
import Word from "./Word";
import Timer from "./Timer";
import DrawingCanvas from "./DrawingCanvas";
import UserControl from "./UserControl";

export default class Main extends Component {
  constructor() {
    super({
      tagName: 'main'
    });
  }

  render() {
    this.element.append(
      new Word().element,
      new Timer().element,
      new DrawingCanvas().element,
      new UserControl().element
    )
  }
}
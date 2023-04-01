import { Component } from "../../core";
import RoomList from "./RoomList";
import Buttons from "./Buttons";

export default class Main extends Component {
  constructor() {
    super({
      tagName: 'main'
    });
  }

  render() {
    this.element.classList.add('box-container');
    this.element.innerHTML = /* html */`
      <h2>ROOM LIST</h2>
    `;
    this.element.append(
      new RoomList().element,
      new Buttons().element
    );
  }
}
import { Component } from "../core";
import Header from "../components/entry/Header";
import Main from "../components/rooms/Main";

export default class Rooms extends Component {
  render() {
    this.element.setAttribute('id', 'game');
    this.element.classList.add('entry', 'rooms');
    this.element.append(
      new Header().element,
      new Main().element
    )
  }
}
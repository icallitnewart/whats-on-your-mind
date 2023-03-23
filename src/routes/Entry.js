import { Component } from "../core";
import Header from "../components/entry/Header";

export default class Entry extends Component {
  render() {
    this.element.setAttribute('id', 'game');
    this.element.classList.add('entry');
    this.element.append(
      new Header().element,
    );
  }
}
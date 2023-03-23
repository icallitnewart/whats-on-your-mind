import { Component } from "../core";
import Header from "../components/game/Header";
import Main from "../components/game/Main";
import Aside from "../components/game/Aside";

export default class Game extends Component {
  render() {
    this.element.setAttribute('id', 'game');
    this.element.classList.add('play');
    this.element.append(
      new Header().element,
      new Main().element,
      new Aside().element,
    )
  }
}
import { Component } from "../../core";
import PlayerList from "./PlayerList";
import Chat from "./Chat";

export default class Aside extends Component {
  constructor() {
    super({
      tagName: 'aside'
    });
  }

  render() {
    this.element.append(
      new PlayerList().element,
      new Chat().element
    )
  }
}
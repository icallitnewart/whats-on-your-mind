import { Component } from "../../core";
import UserProfile from "./UserProfile";
import GameButtons from "./GameButtons";

export default class UserControl extends Component {
  render() {
    this.element.classList.add('user-control');
    this.element.append(
      new UserProfile().element,
      new GameButtons().element
    );
  }
}
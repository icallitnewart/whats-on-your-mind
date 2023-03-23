import { Component } from "../../core";
import Username from "./Username";
import Avatar from "./Avatar";
import Buttons from "./Buttons";

export default class Form extends Component {
  render() {
    this.element.classList.add('profile-form');
    this.element.append(
      new Username().element,
      new Avatar().element,
      new Buttons().element
    )
  }
}
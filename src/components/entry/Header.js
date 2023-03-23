import { Component } from "../../core";
import Logo from "./Logo";
import Menu from "./Menu";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    this.element.append(
      new Logo().element,
      new Menu().element
    )
  }
}
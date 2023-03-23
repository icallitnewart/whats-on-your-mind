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
    const path = location.hash.replace('#/', '');

    this.element.append(
      new Logo().element,
      (!path) ? new Menu().element : ''
    )
  }
}
import { Component } from "../../core";
import locationStore from "../../store/location";
import Logo from "./Logo";
import Menu from "./Menu";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }

  render() {
    const page = locationStore.state.currentPage;

    this.element.append(
      new Logo().element,
      (page === 'Entry') ? new Menu().element : ''
    )
  }
}
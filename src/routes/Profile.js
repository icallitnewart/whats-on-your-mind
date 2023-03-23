import { Component } from "../core";
import Header from "../components/entry/Header";
import Main from "../components/profile/Main";

export default class Profile extends Component {
  render() {
    this.element.setAttribute('id', 'game');
    this.element.classList.add('entry', 'profile');
    this.element.append(
      new Header().element,
      new Main().element
    )
  }
}
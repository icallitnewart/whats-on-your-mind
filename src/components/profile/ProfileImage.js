import { Component } from "../../core";

export default class ProfileImage extends Component {
  render() {
    this.element.classList.add('profile-image');
    this.element.innerHTML = /* html */`
      <div class="pic">🐯</div>
    `;
  }
}
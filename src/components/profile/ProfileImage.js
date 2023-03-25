import { Component } from "../../core";
import profileStore from "../../store/profile";

export default class ProfileImage extends Component {
  constructor() {
    super();
    profileStore.subscribe('avatar', () => this.render());
  }
  render() {
    this.element.classList.add('profile-image');
    this.element.innerHTML = /* html */`
      <div class="pic">${profileStore.state.avatar}</div>
    `;
  }
}
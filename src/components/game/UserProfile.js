import { Component } from "../../core";
import profileStore from "../../store/profile";

export default class UserProfile extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });
  }

  render() {
    this.element.classList.add('user-profile');
    this.element.innerHTML = /* html */`
      <li class="user-image">${profileStore.state.avatar}</li>
      <li class="user-name">
        <span>USERNAME</span>
        <span>${profileStore.state.username}</span>
      </li>
      <li class="user-score">
        <span>SCORE</span>
        <span>0</span>
      </li>
    `;
  }
}
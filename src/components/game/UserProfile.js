import { Component } from "../../core";

export default class UserProfile extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });
  }

  render() {
    this.element.classList.add('user-profile');
    this.element.innerHTML = /* html */`
      <li class="user-image">🐰</li>
      <li class="user-name">
        <span>USERNAME</span>
        <span>Alice</span>
      </li>
      <li class="user-score">
        <span>SCORE</span>
        <span>100</span>
      </li>
    `;
  }
}
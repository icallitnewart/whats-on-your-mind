import { Component } from "../../core";

export default class Avatar extends Component {
  async render() {
    const avatars = ['🐺', '🐨', '🐸', '🐯', '🐹', '🦝', '🦒', '🐰'];

    this.element.classList.add('avatars');
    this.element.innerHTML = /* html */`
      <label for="avatar">AVATAR</label>
      <input type="hidden" name="avatar" id="avatar">
      <ul></ul>
    `;

    const images = avatars.reduce((acc, cur) => {
      acc += `<li><span class="pic">${cur}</span></li>`;
      return acc;
    }, '');
    this.element.querySelector('ul').innerHTML = images;
  }
}
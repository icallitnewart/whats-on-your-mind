import { Component } from "../../core";
import profileStore from "../../store/profile";
import avatarJSON from '../../../public/assets/db/avatar.json';

export default class Avatar extends Component {
  constructor() {
    super();
    this.handleEvent();
  }

  render() {
    this.element.classList.add('avatars');
    this.element.innerHTML = /* html */`
      <label for="avatar">AVATAR</label>
      <ul></ul>
    `;

    const avatars = avatarJSON.data;
    const avatarList = avatars.map((avatar, i) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.classList.add('pic');
      span.innerHTML = avatar.image;
      span.setAttribute('type', avatar.animal);
      if (profileStore.state.avatar === avatar.image) li.classList.add('active');
      li.append(span);
      return li;
    });

    this.element.querySelector('ul').append(...avatarList);
  }

  handleEvent() {
    const avatars = this.element.querySelectorAll('.pic');
    const selectAvatar = (e) => {
      const selected = e.currentTarget;
      profileStore.state.avatar = selected.innerText;
      for (const avatar of avatars) avatar.parentElement.classList.remove('active');
      selected.parentElement.classList.add('active');
    };
    avatars.forEach(avatar => avatar.addEventListener('click', selectAvatar));
  }
}
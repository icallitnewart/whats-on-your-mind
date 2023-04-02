import { Component } from "../../core";
import roomStore from "../../store/room";
import chatStore from "../../store/chat";

export default class Dialogue extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });
    roomStore.subscribe('userList', () => {
      this.render();
    });
    chatStore.subscribe('chats', () => {
      this.render();
    });
  }

  render() {
    /* 수정 필요!! */
    this.element.innerHTML = '';
    this.element.classList.add('chat-dialogue');

    const newNotification = roomStore.state.userList.map(user => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      li.classList.add('notification');
      span.innerText = `${user.avatar} ${user.username}님이 입장하셨습니다 👏🏻`;
      li.append(span);
      return li;
    });
    if (roomStore.state.userList.length > 0) this.element.append(...newNotification);


    const chatBubbles = chatStore.state.chats.map(chat => {
      const li = document.createElement('li');
      const html = `
        <div class="user-profile-image">
        ${chat.avatar}
        </div>
        <div class="user-dialogue">
          <span>${chat.username}</span>
          <p class="dialogue-bubble">
            ${chat.msg}
          </p>
        </div>
      `;
      li.innerHTML = html;
      return li;
    });
    if (chatStore.state.chats.length > 0) this.element.append(...chatBubbles);
  }
}
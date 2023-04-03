import { Component } from "../../core";
import roomStore from "../../store/room";
import chatStore from "../../store/chat";

export default class Dialogue extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });

    roomStore.subscribe('userListUpdate', () => {
      const { userListUpdate } = roomStore.state;
      const newState = {
        type: 'notification',
        ...userListUpdate
      };
      this.render(newState);
    });

    chatStore.subscribe('chats', () => {
      const { chats } = chatStore.state;
      const newChat = chats[chats.length - 1];
      const newState = {
        type: 'message',
        ...newChat
      };
      this.render(newState);
    });
  }

  render(newState) {
    this.element.classList.add('chat-dialogue');

    if (newState) {
      const { type, username, avatar, msg, isEnter } = newState;
      const li = document.createElement('li');

      if (type === 'notification') {
        const span = document.createElement('span');
        const msg = {
          enter: `${avatar} ${username}님이 입장하셨습니다👏🏻`,
          leave: `${avatar} ${username}님이 퇴장하셨습니다😢`
        };
        li.classList.add('notification');
        span.innerText = isEnter ? msg.enter : msg.leave;
        li.append(span);
      } else if (type === 'message') {
        const html = `
        <div class="user-profile-image">
        ${avatar}
        </div>
        <div class="user-dialogue">
          <span>${username}</span>
          <p class="dialogue-bubble">
            ${msg}
          </p>
        </div>
      `;
        li.innerHTML = html;
      }

      this.element.append(li);
    }
  }
}
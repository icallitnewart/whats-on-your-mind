import { Component } from "../../core";
import roomStore from "../../store/room";
import chatStore from "../../store/chat";

export default class Dialogue extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });

    roomStore.subscribe('userList', () => {
      const { userList } = roomStore.state;
      const newUser = userList[userList.length - 1];
      const newState = {
        type: 'notification',
        ...newUser
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
      const { username, avatar, msg } = newState;
      const li = document.createElement('li');

      switch (newState.type) {
        case 'notification':
          const span = document.createElement('span');
          li.classList.add('notification');
          span.innerText = `${avatar} ${username}님이 입장하셨습니다👏🏻`;
          li.append(span);
          this.element.append(li);
          break;

        case 'message':
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
          this.element.append(li);
          break;
      }
    }
  }
}
import { Component } from "../../core";
import roomStore from "../../store/room";

export default class Dialogue extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });
    roomStore.subscribe('userList', () => this.render());
  }

  render() {
    this.element.classList.add('chat-dialogue');

    const state = roomStore.state;
    const newNotification = () => {
      const userList = state.userList;
      const user = userList[userList.length - 1];
      const li = document.createElement('li');
      const span = document.createElement('span');
      li.classList.add('notification');
      span.innerText = `${user.avatar} ${user.username}님이 입장하셨습니다 👏🏻`;
      li.append(span);
      return li;
    };
    if (state.userList.length > 0) this.element.append(newNotification());

    // const test = [
    //   {
    //     avatar: '🦒',
    //     username: 'Sam',
    //     content: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ'
    //   }
    // ];

    // const chatBubbles = test.map(chat => {
    //   const html = `
    //     <li>
    //       <div class="user-profile-image">
    //       ${chat.avatar}
    //       </div>
    //       <div class="user-dialogue">
    //         <span>${chat.username}</span>
    //         <p class="dialogue-bubble">
    //           ${chat.content}
    //         </p>
    //       </div>
    //     </li>
    //   `;

    //   return html;
    // });
    // this.element.innerHTML = chatBubbles.join('');
  }
}
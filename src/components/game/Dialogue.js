import { Component } from "../../core";

export default class Dialogue extends Component {
  constructor() {
    super({
      tagName: 'ul'
    })
  }

  render() {
    this.element.classList.add('chat-dialogue');

    const test = [
      {
        avatar: '🦒',
        username: 'Sam',
        content: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ'
      }
    ];

    const chatBubbles = test.map(chat => {
      const html = `
        <li>
          <div class="user-profile-image">
          ${chat.avatar}
          </div>
          <div class="user-dialogue">
            <span>${chat.username}</span>
            <p class="dialogue-bubble">
              ${chat.content}
            </p>
          </div>
        </li>
      `;

      return html;
    });
    this.element.innerHTML = chatBubbles.join('');
  }
}
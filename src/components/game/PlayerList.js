import { Component } from "../../core";

export default class PlayerList extends Component {
  render() {
    this.element.classList.add('player-list');
    this.element.innerHTML = /* html */`
      <ul></ul>
    `;

    const test = [
      {
        avatar: '🐺',
        username: 'John',
        score: 0
      },
      {
        avatar: '🐨',
        username: 'Jane',
        score: 0
      }
    ];

    const players = test.map(player => {
      const html = `
        <li>
          <span class="player-avatar">${player.avatar}</span>
          <span class="player-username">${player.username}</span>
          <span class="player-score">${player.score}</span>
        </li>
      `;

      return html;
    });

    this.element.querySelector('ul').innerHTML = players.join('');
  }
}
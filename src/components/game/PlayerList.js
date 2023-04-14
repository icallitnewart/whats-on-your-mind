import { Component } from "../../core";
import roomStore from "../../store/room";

export default class PlayerList extends Component {
  constructor() {
    super();
    roomStore.subscribe('userList', ()=> this.render());
  }
  
  render() {
    this.element.classList.add('player-list');
    this.element.innerHTML = /* html */`
      <ul></ul>
    `;

    const addPlayer = (player) => {
      const { avatar, username, score } = player;
      const li = document.createElement('li');

      [{ avatar }, { username }, { score }].forEach(el => {
        const span = document.createElement('span');
        span.classList.add(`player-${Object.keys(el)[0]}`);
        span.innerText = Object.values(el)[0];
        li.append(span);
      });
      return li;
    }

    const players = roomStore.state.userList.map(addPlayer);
    if (players.length > 0) this.element.querySelector('ul').append(...players);
  }
}
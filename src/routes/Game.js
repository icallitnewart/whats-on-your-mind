import { Component } from "../core";
import Header from "../components/game/Header";
import Main from "../components/game/Main";
import Aside from "../components/game/Aside";
import { updateUserList, addMessage, leaveRoom, getUserList } from "../utils/socket";
import roomStore from "../store/room";

export default class Game extends Component {
  constructor() {
    super();
    this.handleEvent();
    updateUserList();
    addMessage();
    leaveRoom();
    getUserList(roomStore.state.room);
  }

  render() {
    this.element.setAttribute('id', 'game');
    this.element.classList.add('play');
    this.element.append(
      new Header().element,
      new Main().element,
      new Aside().element,
    )
  }
}
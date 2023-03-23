import { Component } from "../../core";
import Dialogue from "./Dialogue";
import ChatForm from "./ChatForm";

export default class Chat extends Component {
  render() {
    this.element.setAttribute('id', 'chat');
    this.element.append(
      new Dialogue().element,
      new ChatForm().element
    );
  }
}
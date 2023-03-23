import { Component } from "../../core";

export default class ChatForm extends Component {
  render() {
    this.element.classList.add('chat-form');
    this.element.innerHTML = /* html */`
      <input type="text" name="chat-input" id="chat-input" />
      <button><i class="fa-solid fa-comment-dots"></i></button>
    `;
  }
}
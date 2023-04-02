import { Component } from "../../core";
import chatStore from "../../store/chat";
import { submitMessage } from "../../utils/socket";

export default class ChatForm extends Component {
  constructor() {
    super({
      tagName: 'form'
    });
    this.handleEvent();
  }

  render() {
    this.element.classList.add('chat-form');
    this.element.innerHTML = /* html */`
      <input type="text" name="chat-input" id="chat-input" />
      <button><i class="fa-solid fa-comment-dots"></i></button>
    `;
  }

  handleEvent() {
    const input = this.element.querySelector('#chat-input');
    input.addEventListener('input', () => {
      chatStore.state.input = input.value;
    });

    this.element.addEventListener('submit', (e) => {
      e.preventDefault();
      submitMessage(input.value);
      input.value = '';
    })
  }
}
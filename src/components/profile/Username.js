import { Component } from "../../core";
import profileStore from "../../store/profile";

export default class Username extends Component {
  constructor() {
    super();
    this.handleEvent();
    profileStore.subscribe('error', () => {
      const error = profileStore.state.error;
      if (error) {
        const span = document.createElement('span');
        span.innerText = `*${error}`;
        span.classList.add('errMsg');
        this.element.prepend(span);
      } else if (error === false) {
        const errMsg = this.element.querySelector('.errMsg');
        errMsg.remove();
      }
    });
  }

  render() {
    this.element.classList.add('username');
    this.element.innerHTML = /* html */`
      <label for="username">USERNAME</label>
      <input 
        type="text" 
        name="username" 
        id="username" 
      />
    `;
  }

  handleEvent() {
    const input = this.element.querySelector('#username');
    input.addEventListener('input', () => {
      const state = profileStore.state;
      state.username = input.value;
      if (state.error) state.error = false;
    });
  }
}
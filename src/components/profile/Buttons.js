import { Component } from "../../core";
import { checkErrorBeforeSubmit } from "../../store/profile";

export default class Buttons extends Component {
  constructor() {
    super();
    this.handleEvent();
  }

  render() {
    this.element.classList.add('btns');
    this.element.innerHTML = /* html */`
      <button id="backBtn">Back</button>
      <button id="nextBtn">Next</button>
    `;
  }

  handleEvent() {
    const backBtn = this.element.querySelector('#backBtn');
    const nextbtn = this.element.querySelector('#nextBtn');
    backBtn.addEventListener('click', () => history.go(-1));
    nextbtn.addEventListener('click', checkErrorBeforeSubmit);
  }
}
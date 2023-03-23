import { Component } from "../../core";
import ProfileImage from "./ProfileImage";
import Form from "./Form";

export default class Main extends Component {
  constructor() {
    super({
      tagName: 'main'
    });
  }

  render() {
    this.element.classList.add('box-container');
    this.element.append(
      new ProfileImage().element,
      new Form().element
    );
  }
}
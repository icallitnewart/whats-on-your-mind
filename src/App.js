import { Component } from "./core";

export default class App extends Component {
  //라우터 요소 생성
  constructor() {
    super({ tagName: 'router-view' });
  }
}
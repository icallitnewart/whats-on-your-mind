export class Component {
  constructor(payload = {}) {
    const {
      tagName = 'div',
      state = {},
      props = {}
    } = payload;

    this.element = tagName
      ? document.createElement(tagName)
      : document.createDocumentFragment();
    this.state = state;
    this.props = props;
    this.render();
  }

  render() { }
  handleEvent() { }
}
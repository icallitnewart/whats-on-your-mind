import { Component } from "../../core";

export default class PaintTools extends Component {
  constructor() {
    super({
      tagName: 'ul'
    });
  }

  render() {
    const paintColors = [
      'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white'
    ];

    const createTools = (type, color = null) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');

      li.append(btn);
      btn.classList.add(type);

      if (type === 'brush') {
        btn.style.backgroundColor = color;
        btn.setAttribute('color', color);
        if (color === 'black') li.classList.add('active');
      } else {
        const icon = document.createElement('i');
        icon.classList = (type === 'eraser')
          ? 'fa-solid fa-eraser'
          : 'fa-solid fa-rotate-right';
        btn.append(icon);
      }
      return li;
    };

    const brushes = paintColors.map(color => createTools('brush', color));
    const eraser = createTools('eraser');
    const clear = createTools('clear');

    this.element.classList.add('paint-tools');
    this.element.append(
      ...brushes,
      eraser,
      clear
    );
  }
}
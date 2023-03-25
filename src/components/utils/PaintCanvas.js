export default class PaintCanvas {
  constructor(selector) {
    const {
      element, width, height,
      canvas, brush, eraser, clear
    } = selector;
    this.element = element;
    this.canvas = this.element.querySelector(canvas);
    this.brushes = this.element.querySelectorAll(brush);
    this.clear = this.element.querySelector(clear);
    this.eraser = this.element.querySelector(eraser);
    this.context = this.canvas.getContext('2d');
    this.width = width;
    this.height = height;
    this.isDrawing = false;
    this.init();
    this.handleEvent();
  }

  init() {
    //캔버스 크기 및 선 스타일 지정
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context.lineWidth = 2;
    this.context.lineCap = 'round';
  }

  handleEvent() {
    //그림 도구 이벤트
    this.brushes.forEach(brush => brush.addEventListener('click', this.selectBrush.bind(this)));
    this.clear.addEventListener('click', this.resetCanvas.bind(this));
    this.eraser.addEventListener('click', this.erase.bind(this));

    //캔버스 이벤트
    this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
    this.canvas.addEventListener("mouseleave", this.stopDrawing.bind(this));
  }

  selectBrush(e) {
    const target = e.currentTarget;
    //브러시 아이콘 활성화
    for (const brush of this.brushes) {
      brush.parentElement.classList.remove('active');
      this.eraser.parentElement.classList.remove('active');
    }
    target.parentElement.classList.add('active');

    //커서 모양, 색상, 선 굵기 변경
    this.canvas.style.cursor = 'crosshair';
    this.context.strokeStyle = target.getAttribute('color');
    this.context.lineWidth = 2;
  };

  //캔버스 초기화
  resetCanvas() {
    if (window.confirm('다 지우시겠습니까?')) {
      this.context.clearRect(0, 0, this.width, this.height);
    }
  }

  erase(e) {
    //지우개 아이콘 활성화
    for (const brush of this.brushes) brush.parentElement.classList.remove('active');
    e.currentTarget.parentElement.classList.add('active');

    //커서 모양, 색상, 선 굵기 변경
    this.canvas.style.cursor = 'pointer';
    this.context.strokeStyle = 'white';
    this.context.lineWidth = 30;
  }

  startDrawing() {
    this.isDrawing = true;
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  mouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;

    //클릭하기 직전
    if (!this.isDrawing) {
      this.context.beginPath(); //경로 초기화
      this.context.moveTo(x, y);  //경로 시작점 설정
    } else {  //클릭 후
      this.context.lineTo(x, y);  //시작점에서 특정 위치까지 직선 그리기
      this.context.stroke();  //경로를 따라 선 그리기
    }
  }
}
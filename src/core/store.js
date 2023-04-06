export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key], //state값 사용시 동작
        set: (val) => {  //state값 변화시 동작
          state[key] = val;
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach(observer => observer(val))
          }
        }
      });
    }
  }

  //state값 변경시 콜백 함수 실행
  subscribe(key, cb) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)  //함수가 여러 개일때
      : this.observers[key] = [cb]
  }
}
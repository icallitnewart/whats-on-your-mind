///컴포넌트 생성///
export class Component {
  constructor(payload = {}) {
    const {
      tagName = 'div',
      state = {},
      props = {}
    } = payload;

    this.element = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }

  render() { }
}


///라우터 설정///
function routeRender(routes) {
  //접속시 무조건 /#/로 redirect
  if (!location.hash) history.replaceState(null, '', '/#/');

  const [hash, queryString = ''] = location.hash.split('?');
  const query = queryString
    .split('&')
    .reduce((acc, cur) => {
      const [key, value] = cur.split('=');
      acc[key] = value;
      return acc;
    }, {});
  //query 정보를 history 객체의 state에 저장
  history.replaceState(query, '');

  //접속시 라우트 정보에 맞게 컴포넌트 렌더링
  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash));
  const routerView = document.querySelector('router-view');
  routerView.innerHTML = '';
  routerView.append(new currentRoute.component().element);
}

//주소 변경시 페이지 렌더링
export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => routeRender(routes));
    routeRender(routes);
  }
}


///상태 관리를 위한 스토어 설정///
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperties(this.state, key, {
        get: () => state[key], //state값 사용시 동작
        set: (val) => {  //state값 변화시 동작
          state[key] = val;
          this.observers[key].forEach(observer => observer(val));
        }
      });
    }
  }

  //state값 변경시 콜백 함수 실행
  subscribe(key, cb) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(db)  //함수가 여러 개일때
      : this.observers[key] = [cb]
  }
}
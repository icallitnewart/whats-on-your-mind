import locationStore from "../store/location";

function routeRender(routes) {
  const routerView = document.querySelector('router-view');

  //라우트 정보에 맞게 컴포넌트 렌더링
  const currentRoute = routes.find(route => route.page === locationStore.state.currentPage);

  routerView.innerHTML = '';
  routerView.append(new currentRoute.component().element);
}

//currentPage 상태값 변경시 페이지 렌더링
export function createRouter(routes) {
  return function () {
    locationStore.subscribe('currentPage', () => routeRender(routes));
    routeRender(routes);
  }
}
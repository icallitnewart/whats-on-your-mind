import locationStore from "../store/location";

function routeRender(routes) {
  //다른 경로로 진입 방지
  const path = window.location.pathname;
  if (path !== '/') window.location.replace('/');

  //라우트 정보에 맞게 컴포넌트 렌더링
  const currentRoute = routes.find(route => route.page === locationStore.state.currentPage);

  const routerView = document.querySelector('router-view');
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
import App from "./App";
import router from './routes';

//App.js 렌더링 후 라우터 적용
const root = document.querySelector('#root');
root.append(new App().element);
router();
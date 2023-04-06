import { Store } from "../core";
import { setProfile } from "../utils/socket";
import { changeRoute } from "./location";

const profileStore = new Store({
  username: '',
  avatar: '🐰',
  error: null // null : 처음 & submit 성공
});

export default profileStore;

export const checkErrorBeforeSubmit = () => {
  const state = profileStore.state;
  if (state.username && state.avatar) {
    if (state.username.includes(' ')) {
      return state.error = '공백은 포함할 수 없습니다.';
    }
    if (state.username.length > 6) {
      return state.error = '6자 이하로 입력해 주세요.';
    }
    //submit 성공
    state.error = null;
    setProfile(state.username, state.avatar, () => {
      changeRoute('Rooms');
    });
  } else {
    state.error = '빈칸을 입력해 주세요.';
  }
}

import { Store } from "../core";

const chatStore = new Store({
  input: '',
  chats: []
});

export default chatStore;
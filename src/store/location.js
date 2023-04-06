import { Store } from "../core";

const locationStore = new Store({
  currentPage: 'Entry'
});

export default locationStore;

export function changeRoute(location) {
  locationStore.state.currentPage = location;
}
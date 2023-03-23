import { createRouter } from "../core";
import Entry from "./Entry";
import Profile from "./Profile";
import Game from "./Game";

export default createRouter([
  { path: '#/', component: Entry },
  { path: '#/profile', component: Profile },
  { path: '#/game', component: Game }
]);
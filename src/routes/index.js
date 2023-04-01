import { createRouter } from "../core";
import Entry from "./Entry";
import Profile from "./Profile";
import Rooms from "./Rooms";
import Game from "./Game";

export default createRouter([
  { path: '#/', component: Entry },
  { path: '#/profile', component: Profile },
  { path: '#/rooms', component: Rooms },
  { path: '#/game', component: Game }
]);
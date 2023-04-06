import { createRouter } from "../core/router";
import Entry from "./Entry";
import Profile from "./Profile";
import Rooms from "./Rooms";
import Game from "./Game";

export default createRouter([
  { page: 'Entry', component: Entry },
  { page: 'Profile', component: Profile },
  { page: 'Rooms', component: Rooms },
  { page: 'Game', component: Game }
]);
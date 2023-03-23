import { createRouter } from "../core";
import Entry from "./Entry";
import Profile from "./Profile";

export default createRouter([
  { path: '#/', component: Entry },
  { path: '#/profile', component: Profile }
]);
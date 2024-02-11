import { createContext } from "react";

import { Auction } from "./auction";
import { Authorization } from "./auth";
import { User } from "./user";

export class RootStore {
  auction: Auction;
  user: User;
  auth: Authorization;
  constructor() {
    this.auction = new Auction();
    this.user = new User();
    this.auth = new Authorization();
  }
}

export const rootStore = new RootStore();

export const storeContext = createContext<RootStore | null>(rootStore);

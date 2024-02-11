import { createContext } from "react";

import { Auction } from "./auction";
import { Authorization } from "./auth";
import { Resource } from "./resource";
import { User } from "./user";

export class RootStore {
  auction: Auction;
  user: User;
  auth: Authorization;
  resource: Resource;
  constructor() {
    this.resource = new Resource();
    this.auction = new Auction();
    this.user = new User();
    this.auth = new Authorization();
  }
}

export const rootStore = new RootStore();

export const storeContext = createContext<RootStore | null>(rootStore);

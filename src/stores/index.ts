import { createContext } from "react";

import { Auction } from "./auction";

// import { user } from "./user";

export class RootStore {
  auction: Auction;
  constructor() {
    this.auction = new Auction();
  }
}

export const rootStore = new RootStore();

export const storeContext = createContext<RootStore | null>(rootStore);

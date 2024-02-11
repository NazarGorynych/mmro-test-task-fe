import { AuctionType } from "@utils/types";
import { action, makeObservable, observable, runInAction } from "mobx";

import { Resource } from "./resource";

export class User extends Resource {
  userAuctions: AuctionType[] | null = null;
  constructor() {
    super();
    makeObservable(this, {
      userAuctions: observable,
      createUserAuctions: action,
      updateUserAuctions: action,
      replenishBalance: action,
      getUserAuctions: action,
      getUserAuction: action,
      deleteUserAuction: action
    });
  }

  createUserAuctions = async () => {
    try {
      const data = await this.fetch.get("/users/auctions");
      this.userAuctions = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  replenishBalance = async (amount: string) => {
    try {
      console.log(this.fetch, " this.fetch");
      const { data } = await this.fetch.put("users/replenish", {
        amount
      });
      runInAction(() => {
        this.balance = data.amount;
        this.reservedBalance = data.reserved_amount;
      });
      return data;
    } catch (error) {
      console.log(error, "error");
    }
  };

  updateUserAuctions = async () => {};

  getUserAuctions = async () => {};

  getUserAuction = async () => {};

  deleteUserAuction = async () => {};
}

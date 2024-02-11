import { action, makeObservable, observable } from "mobx";

import { Resource } from "./resource";

export class User extends Resource {
  userAuctions = null;
  constructor() {
    super();
    makeObservable(this, {
      userAuctions: observable,
      createUserAuctions: action,
      updateUserAuctions: action,
      getUserAuctions: action,
      getUserAuction: action,
      deleteUserAuction: action
    });
  }

  async createUserAuctions() {
    try {
      const data = await this.fetch?.get("/users/auctions");
      this.userAuctions = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  }

  async updateUserAuctions() {}

  async getUserAuctions() {}

  async getUserAuction() {}

  async deleteUserAuction() {}
}

import { action, makeObservable } from "mobx";

import { Resource } from "./resource";

export class User extends Resource {
  constructor() {
    super();
    makeObservable(this, {
      createUserAuctions: action,
      updateUserAuctions: action,
      getUserAuctions: action,
      getUserAuction: action,
      deleteUserAuction: action
    });
  }

  async createUserAuctions() {}

  async updateUserAuctions() {}

  async getUserAuctions() {}

  async getUserAuction() {}

  async deleteUserAuction() {}
}

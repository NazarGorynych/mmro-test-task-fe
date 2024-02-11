import { makeObservable, action, observable } from "mobx";

import { Resource } from "./resource";

export class Auction extends Resource {
  auctions = null;
  auction = null;
  constructor() {
    super();
    makeObservable(this, {
      auctions: observable,
      auction: observable,
      getAuctions: action,
      getAuction: action
    });
  }

  async getAuctions() {
    try {
      const data = await this.fetch?.get("/auctions");
      this.auctions = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  }
  async getAuction(id: number) {
    try {
      const data = await this.fetch?.get(`/auctions/${id}`);
      this.auction = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  }
  async createBid(id: number) {
    try {
      const data = await this.fetch?.get(`/auctions/${id}/bids`);
      this.auction = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  }
}

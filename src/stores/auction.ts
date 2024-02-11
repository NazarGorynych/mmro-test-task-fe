import { AuctionType } from "@utils/types";
import { makeObservable, action, observable } from "mobx";

import { Resource } from "./resource";

export class Auction extends Resource {
  auctions: AuctionType[] | null = null;
  auction: AuctionType | null = null;
  constructor() {
    super();
    makeObservable(this, {
      auctions: observable,
      auction: observable,
      getAuctions: action,
      getAuction: action
    });
  }

  getAuctions = async () => {
    try {
      const data = await this.fetch?.get("/auctions");
      this.auctions = data?.data?.auctions;
    } catch (error) {
      console.log(error, "error");
    }
  };
  getAuction = async (id: number) => {
    try {
      const data = await this.fetch?.get(`/auctions/${id}`);
      this.auction = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  };
  createBid = async (id: number) => {
    try {
      const data = await this.fetch?.get(`/auctions/${id}/bids`);
      this.auction = data?.data;
    } catch (error) {
      console.log(error, "error");
    }
  };
}

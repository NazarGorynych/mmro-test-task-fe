import { AuctionType } from "@utils/types";

export type AuctionProps = AuctionType;

export type Auctioneer = {
  id: number;
  firstname: string;
  lastname: string;
};

export type AuctionValues = {
  amount: string | null;
  balance: string;
};

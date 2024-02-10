import { TagsType } from "@utils/types";

export type AuctionProps = {
  tags: TagsType[];
  id: number;
  title: string;
  initialRate: string;
  startDate: Date;
  endDate: Date;
  auctioneer: Auctioneer;
};

export type Auctioneer = {
  id: number;
  firstname: string;
  lastname: string;
};

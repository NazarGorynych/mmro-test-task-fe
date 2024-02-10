import { TagsType } from "@utils/types";

export type MyAuctionCardProps = {
  tags: TagsType[];
  id: number;
  title: string;
  initialRate: string;
  handleOpenConfirm: (id: number) => void;
  startDate: Date;
  endDate: Date;
};

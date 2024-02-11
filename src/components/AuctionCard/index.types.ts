import { AuctionType } from "@utils/types";

export type AuctionCardProps = AuctionType & {
  handleOpenConfirm?: (id: number) => void;
  isUserCard?: boolean;
};

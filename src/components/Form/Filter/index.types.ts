import { FilterListType } from "@utils/types";

export type ActionTypes =
  | "all"
  | "technique"
  | "sports"
  | "books"
  | "clothing"
  | "planned"
  | "charitable";

export type FilterFormValues = {
  auctionType: ActionTypes;
  pastAction: boolean;
  activeAction: boolean;
  plansAction: boolean;
};

export type FilterProps = {
  list: FilterListType[];
  className?: string;
};

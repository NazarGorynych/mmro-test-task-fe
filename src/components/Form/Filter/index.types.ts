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

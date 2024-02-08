export type ActionTypes =
  | "all"
  | "technique"
  | "sports"
  | "books"
  | "clothing"
  | "planned"
  | "charitable";

export type CheckboxsType = {
  id: number;
  title: string;
  value: "pastAction" | "activeAction" | "plansAction";
};

export type FilterFormValues = {
  auctionType: ActionTypes;
  pastAction: boolean;
  activeAction: boolean;
  plansAction: boolean;
};

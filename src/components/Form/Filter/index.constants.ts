import { CheckboxButtonType } from "@utils/types";

import { FilterFormValues } from "./index.types";

export const checkboxs: CheckboxButtonType[] = [
  {
    id: 0,
    title: "Минулі аукціони",
    value: "pastAction",
    name: "pastAction"
  },
  {
    id: 1,
    title: "Активні аукціони",
    value: "activeAction",
    name: "activeAction"
  },
  {
    id: 2,
    title: "Заплановані аукціони",
    value: "plansAction",
    name: "plansAction"
  }
];

export const initialValues: FilterFormValues = {
  auctionType: "all",
  pastAction: false,
  activeAction: false,
  plansAction: false
};

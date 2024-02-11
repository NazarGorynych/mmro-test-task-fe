import { CheckboxButtonType } from "@utils/types";

import { CreateActionValues } from "./index.types";

export const checkboxs: CheckboxButtonType[] = [
  {
    id: 0,
    title: "Техніка",
    value: "technique",
    name: "category.technique"
  },
  {
    id: 1,
    title: "Спорт",
    value: "sport",
    name: "category.sport"
  },
  {
    id: 2,
    title: "Книги",
    value: "book",
    name: "category.book"
  }
];
export const incereaseBidCheckboxs: CheckboxButtonType[] = [
  {
    id: 0,
    title: "+50",
    value: "+50",
    name: "category.50"
  },
  {
    id: 1,
    title: "+100",
    value: "+100",
    name: "category.100"
  },
  {
    id: 2,
    title: "+200",
    value: "+200",
    name: "category.200"
  },
  {
    id: 3,
    title: "+500",
    value: "+500",
    name: "category.500"
  },
  {
    id: 4,
    title: "+1000",
    value: "+1000",
    name: "category.1000"
  }
];

export const initialValues: CreateActionValues = {
  main_image: "",
  title: "",
  description: "",
  min_bid: "",
  min_bid_diff: "20",
  bid_type: "sum_win",
  status: "active",
  start_date: "",
  end_date: ""
};

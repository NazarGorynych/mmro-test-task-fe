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

import { CheckboxButtonType } from "@utils/types";

import { FilterFormValues } from "./index.types";

export const listFilter = [
  {
    id: 0,
    title: "Всі",
    value: "all"
  },
  {
    id: 1,
    title: "Техніка",
    value: "technique"
  },
  {
    id: 2,
    title: "Спорт",
    value: "sports"
  },
  {
    id: 4,
    title: "Книги",
    value: "books"
  },
  {
    id: 5,
    title: "Одяг",
    value: "clothing"
  },
  {
    id: 6,
    title: "Заплановані на сьогодні",
    value: "planned"
  },
  {
    id: 7,
    title: "Благодійні аукціони",
    value: "charitable"
  }
];

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

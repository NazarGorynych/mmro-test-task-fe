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
  cover: "",
  name: "",
  description: "",
  initialRate: 0,
  category: {
    technique: false,
    sport: false,
    book: false
  },
  startDate: new Date(),
  endDate: new Date()
};

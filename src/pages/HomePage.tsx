import { Filter } from "@components/index";
import { useDocumentTitle } from "@hooks/index";

export const list = [
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

const HomePage = () => {
  useDocumentTitle("Home | Auction");
  return (
    <section className="w-full">
      <Filter list={list} />
    </section>
  );
};

export { HomePage };

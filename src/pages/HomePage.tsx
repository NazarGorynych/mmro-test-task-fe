import { Filter, AuctionCard } from "@components/index";
import { useDocumentTitle, useStores } from "@hooks/index";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

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

const HomePage = observer(() => {
  useDocumentTitle("Home | Auction");
  const {
    resource: { getAuctions, auctions }
  } = useStores();

  useEffect(() => {
    getAuctions();
  }, []);
  return (
    <section className="w-full">
      {auctions?.length && <Filter list={list} />}
      {auctions?.length ? (
        <>
          {auctions?.map((auction) => (
            <AuctionCard key={auction.id} {...auction} />
          ))}
        </>
      ) : (
        <span className="text-black mt-20 text-xl font-bold block text-center">
          Немає аукціонів
        </span>
      )}
    </section>
  );
});

export { HomePage };

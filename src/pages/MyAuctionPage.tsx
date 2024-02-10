import { Filter, Typography, MyAuctionCard, Confirm } from "@components/index";
import { useDocumentTitle } from "@hooks/index";
import { useState } from "react";

const auctions = [
  {
    id: 0,
    tags: [
      {
        id: 0,
        text: "Техніка"
      }
    ],
    title: "Iphone XR, 256 гб",
    initialRate: "15 000",
    startDate: new Date(),
    endDate: new Date()
  },
  {
    id: 1,
    tags: [
      {
        id: 0,
        text: "Техніка"
      },
      {
        id: 1,
        text: "Техніка"
      }
    ],
    title: "Iphone XR, 256 гб",
    initialRate: "16 000",
    startDate: new Date(),
    endDate: new Date()
  }
];

export const list = [
  {
    id: 0,
    title: "Аукціони",
    value: "all"
  },
  {
    id: 0,
    title: "Ставки",
    value: "rate"
  }
];

const MyAuctionPage = () => {
  useDocumentTitle("My Auction");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [idAuction, setIdAuction] = useState<number | null>(null);
  const handleOpenConfirm = (id: number) => {
    setOpenConfirm(true);
    setIdAuction(id);
  };
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <section className="w-full flex flex-col gap-9">
      <Typography tag="h2" text="Мої Аукціони та Ставки" />
      <Filter list={list} className="!justify-start items-center" />
      <div className="grid grid-cols-2 gap-5 w-full">
        {auctions.map((auction) => (
          <MyAuctionCard
            key={auction.id}
            id={auction.id}
            handleOpenConfirm={handleOpenConfirm}
            tags={auction.tags}
            startDate={auction.startDate}
            endDate={auction.endDate}
            title={auction.title}
            initialRate={auction.initialRate}
          />
        ))}
      </div>
      <Confirm open={openConfirm} onClose={handleCloseConfirm} />
    </section>
  );
};

export { MyAuctionPage };

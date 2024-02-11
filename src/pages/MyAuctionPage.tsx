import { Filter, Typography, AuctionCard, Confirm } from "@components/index";
import { useDocumentTitle, useStores } from "@hooks/index";
import { useState } from "react";

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
  const {
    resource: { getUserAuctions, userAuctions }
  } = useStores();
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
        {userAuctions ? (
          userAuctions?.map((auction) => (
            <AuctionCard
              key={auction.id}
              handleOpenConfirm={handleOpenConfirm}
              {...auction}
              isUserCard={true}
            />
          ))
        ) : (
          <span>у вас немає створених аукціонів.</span>
        )}
      </div>
      <Confirm
        open={openConfirm}
        onClose={handleCloseConfirm}
        isButton={true}
      />
    </section>
  );
};

export { MyAuctionPage };

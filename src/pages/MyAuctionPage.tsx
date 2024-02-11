import {
  Filter,
  Typography,
  AuctionCard,
  Confirm,
  Button
} from "@components/index";
import { useDocumentTitle, useStores } from "@hooks/index";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const MyAuctionPage = observer(() => {
  useDocumentTitle("My Auction");
  const navigate = useNavigate();
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
  const handleReditectToCreateAuction = () => {
    navigate("/create-auction");
  };
  useEffect(() => {
    getUserAuctions();
  }, []);
  return (
    <section className="w-full flex flex-col gap-9">
      <Typography tag="h2" text="Мої Аукціони та Ставки" />
      {userAuctions?.length ? (
        <>
          <Filter list={list} className="!justify-start items-center" />
          <div className="grid grid-cols-2 gap-5 w-full">
            {userAuctions?.map((auction) => (
              <AuctionCard
                key={auction.id}
                handleOpenConfirm={handleOpenConfirm}
                {...auction}
                isUserCard={true}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <Button onClick={handleReditectToCreateAuction}>
            Створити аукціон
          </Button>
        </div>
      )}
      <Confirm
        open={openConfirm}
        onClose={handleCloseConfirm}
        isButton={true}
      />
    </section>
  );
});

export { MyAuctionPage };

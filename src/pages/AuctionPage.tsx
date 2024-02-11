import { Auction } from "@components/index";
import { useDocumentTitle, useStores } from "@hooks/index";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const auctioneer = {
  id: 1,
  firstname: "Микола",
  lastname: "Парасюк"
};

const AuctionPage = () => {
  const {
    resource: { getAuction, auction }
  } = useStores();
  const { auctionId } = useParams();
  useDocumentTitle("Card | Auction");

  useEffect(() => {
    if (auctionId) {
      getAuction(+auctionId);
    }
  }, []);
  if (!auction) {
    return null;
  }
  return (
    <section>
      <Auction key={auction.id} {...auction} />
    </section>
  );
};

export { AuctionPage };

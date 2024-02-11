import { Auction } from "@components/index";
import { useDocumentTitle, useStores } from "@hooks/index";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AuctionPage = observer(() => {
  const {
    resource: { getAuction, auction }
  } = useStores();
  const { auctionId } = useParams();
  useDocumentTitle("Card | Auction");
  console.log(Object.assign({}, auction), "auctionId");
  useEffect(() => {
    if (auctionId) {
      getAuction(+auctionId);
    }
  }, []);
  if (!auction) {
    return null;
  }
  return (
    <section className="mb-10">
      <Auction key={auction.id} {...auction} />
    </section>
  );
});

export { AuctionPage };

import { Auction } from "@components/index";
import { useDocumentTitle } from "@hooks/index";
import { useParams } from "react-router-dom";

const auction = {
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
};
const auctioneer = {
  id: 1,
  firstname: "Микола",
  lastname: "Парасюк"
};
const AuctionPage = () => {
  const params = useParams();
  useDocumentTitle("Card | Auction");

  return (
    <section>
      <Auction
        key={auction.id}
        id={auction.id}
        tags={auction.tags}
        startDate={auction.startDate}
        endDate={auction.endDate}
        title={auction.title}
        initialRate={auction.initialRate}
        auctioneer={auctioneer}
      />
    </section>
  );
};

export { AuctionPage };

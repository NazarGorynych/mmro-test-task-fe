import { useDocumentTitle } from "@hooks/index";
import { useParams } from "react-router-dom";

const AuctionPage = () => {
  const params = useParams();
  useDocumentTitle("Card | Auction");

  return <section>Card</section>;
};

export { AuctionPage };

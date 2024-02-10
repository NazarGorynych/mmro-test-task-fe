import { CreateAction } from "@components/index";
import { useDocumentTitle } from "@hooks/index";
import { LayoutWithBg } from "@layout/index";

const CreateAuctionPage = () => {
  useDocumentTitle("Create Card | Auction");

  return (
    <LayoutWithBg>
      <CreateAction />
    </LayoutWithBg>
  );
};

export { CreateAuctionPage };

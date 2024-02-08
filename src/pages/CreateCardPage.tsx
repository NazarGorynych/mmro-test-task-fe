import { CreateAction } from "@components/index";
import { useDocumentTitle } from "@hooks/index";
import { LayoutWithBg } from "@layout/index";

const CreateCardPage = () => {
  useDocumentTitle("Create Card | Auction");

  return (
    <LayoutWithBg>
      <CreateAction />
    </LayoutWithBg>
  );
};

export { CreateCardPage };

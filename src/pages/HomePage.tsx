import { Filter } from "@components/index";
import { useDocumentTitle } from "@hooks/index";

const HomePage = () => {
  useDocumentTitle("Home | Auction");
  return (
    <section className="w-full">
      <Filter />
    </section>
  );
};

export { HomePage };

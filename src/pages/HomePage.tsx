import { Filter, Field } from "@components/index";
import { useDocumentTitle } from "@hooks/index";

const HomePage = () => {
  useDocumentTitle("Home | Auction");
  return (
    <section className="w-full">
      <Filter />
      <Field label="Test" helperText="test testtest " />
    </section>
  );
};

export { HomePage };

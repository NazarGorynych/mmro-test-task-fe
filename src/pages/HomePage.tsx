import { Filter, DatePickerComponent } from "@components/index";
import { useDocumentTitle } from "@hooks/index";

const HomePage = () => {
  useDocumentTitle("Home | Auction");
  return (
    <section className="w-full">
      <Filter />
      <DatePickerComponent
        setValue={() => {}}
        value={""}
        name={"test"}
        placeholder={""}
      />
    </section>
  );
};

export { HomePage };

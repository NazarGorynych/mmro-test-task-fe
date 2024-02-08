import { Field, CheckboxButton } from "@components/index";
import cx from "clsx";
import { useFormik } from "formik";

import { listFilter, initialValues, checkboxs } from "./index.constants";
import { FilterFormValues } from "./index.types";

const Filter = () => {
  const handleSubmit = () => {};
  const formik = useFormik<FilterFormValues>({
    initialValues,
    onSubmit: handleSubmit
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col gap-10"
    >
      <div className="flex flex-wrap gap-y-4 justify-center">
        {listFilter.map((item) => {
          return (
            <Field
              type="radio"
              name="auctionType"
              onChange={formik.handleChange}
              className="hidden"
              classes={{
                container: "pb-0 gap-0",
                label: cx(
                  "text-black border-b-2 text-black border-b-[#E6E1E1] p-4 text-2xl font-bold cursor-pointer relative",
                  {
                    "before:block before:w-full before:h-1 before:rounded-lg before:left-0 before:bg-primeryBlue before:absolute before:top-[calc(100%-2px)]":
                      formik.values.auctionType === item.value
                  }
                )
              }}
              label={item.title}
              key={item.id}
              id={item.value}
              value={item.value}
            />
          );
        })}
      </div>
      <CheckboxButton<FilterFormValues> formik={formik} checkboxs={checkboxs} />
    </form>
  );
};

export { Filter };

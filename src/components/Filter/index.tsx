import { Field } from "@components/index";
import cx from "clsx";
import { useFormik } from "formik";

import { listFilter, initialValues } from "./index.constants";
import { FilterFormValues } from "./index.types";

const Filter = () => {
  const handleSubmit = () => {};
  const formik = useFormik<FilterFormValues>({
    initialValues,
    onSubmit: handleSubmit
  });

  return (
    <form className="flex flex-wrap w-full">
      <div className="flex">
        {listFilter.map((item) => {
          return (
            <Field
              type="radio"
              name="auctionType"
              onChange={formik.handleChange}
              className="hidden"
              classes={{
                label: cx(
                  "text-black border-b-2 text-black border-b-[#E6E1E1] p-4 text-2xl font-bold cursor-pointer relative",
                  {
                    "before:block before:w-full before:h-1 before:rounded-lg before:bg-primeryBlue before:absolute before:top-[calc(100%-2px)]":
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
    </form>
  );
};

export { Filter };

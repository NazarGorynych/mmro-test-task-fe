import { Field } from "@components/index";
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
      <div className="flex flex-wrap gap-y-4 justify-center border-b-2 pb-[14px] border-b-[#E6E1E1]">
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
      <div className="flex flex-wrap gap-10 h-full justify-center">
        {checkboxs.map((checkbox) => {
          const checked = formik.values[checkbox.value];
          return (
            <Field
              type="checkbox"
              name={checkbox.value}
              onChange={formik.handleChange}
              className="hidden"
              classes={{
                label: cx(
                  "border cursor-pointer rounded-4xl border-black text-black py-4 px-9",
                  { "bg-black text-white": checked }
                )
              }}
              label={checkbox.title}
              key={checkbox.id}
              id={checkbox.value}
              checked={checked}
            />
          );
        })}
      </div>
    </form>
  );
};

export { Filter };

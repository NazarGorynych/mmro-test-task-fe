import { Field, CheckboxButton } from "@components/index";
import cx from "clsx";
import { useFormik } from "formik";
import { FC } from "react";

import { ComponentForm } from "../ComponentForm";
import { initialValues, checkboxs } from "./index.constants";
import { FilterFormValues, FilterProps } from "./index.types";

const Filter: FC<FilterProps> = ({ list, className }) => {
  const handleSubmit = () => {};
  const formik = useFormik<FilterFormValues>({
    initialValues,
    onSubmit: handleSubmit
  });

  return (
    <ComponentForm
      className="w-full flex flex-col gap-10 mb-20"
      onSubmit={formik.handleSubmit}
    >
      <div
        className={cx(
          "flex flex-wrap gap-y-4 justify-between border-b-[#E6E1E1] border-b-2",
          className
        )}
      >
        {list.map((item) => {
          return (
            <Field
              type="radio"
              name="auctionType"
              onChange={formik.handleChange}
              className="hidden"
              classes={{
                container: "pb-0 gap-0",
                label: cx(
                  "text-black text-black p-4 text-2xl font-bold cursor-pointer relative before:block before:w-full before:h-1 before:rounded-lg before:left-0 before:absolute before:top-[calc(100%-2px)] hover:before:bg-primeryBlue",
                  {
                    "before:bg-primeryBlue":
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
    </ComponentForm>
  );
};

export { Filter };

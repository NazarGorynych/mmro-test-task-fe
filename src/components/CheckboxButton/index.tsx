import { Field } from "@components/index";
import cx from "clsx";
import { FormikValues } from "formik";

import {
  CheckboxButtonPorps,
  ComponentCheckboxButtonPorps
} from "./index.types";

const ComponentCheckboxButton = <T extends FormikValues>({
  checkbox,
  formik,
  ...props
}: ComponentCheckboxButtonPorps<T>) => {
  if (!checkbox) {
    return null;
  }
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
      {...props}
    />
  );
};

const CheckboxButton = <T extends FormikValues>({
  checkboxs,
  checkbox,
  formik,
  ...props
}: CheckboxButtonPorps<T>) => {
  if (!checkboxs?.length && checkbox) {
    return (
      <ComponentCheckboxButton checkbox={checkbox} formik={formik} {...props} />
    );
  }
  return (
    <div className="flex flex-wrap gap-10 h-full justify-center">
      {checkboxs?.map((checkbox) => {
        return (
          <ComponentCheckboxButton
            key={checkbox.id}
            formik={formik}
            checkbox={checkbox}
            {...props}
          />
        );
      })}
    </div>
  );
};

export { CheckboxButton };

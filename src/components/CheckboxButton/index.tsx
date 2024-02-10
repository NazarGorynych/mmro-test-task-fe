import { Field, Label } from "@components/index";
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
  const [nameParm, nameField] = checkbox.name.split(".");
  const checked = nameField
    ? formik.values[nameParm][nameField]
    : formik.values[nameParm];
  return (
    <Field
      {...props}
      type="checkbox"
      name={checkbox.name}
      onChange={formik.handleChange}
      className="hidden"
      classes={{
        label: cx(
          "border cursor-pointer rounded-4xl border-black text-black py-3 px-9 hover:bg-black hover:text-white",
          { "bg-black text-white": checked }
        )
      }}
      label={checkbox.title}
      key={checkbox.id}
      id={checkbox.value}
      checked={checked}
    />
  );
};

const CheckboxButton = <T extends FormikValues>({
  checkboxs,
  checkbox,
  formik,
  label,
  classes,
  ...props
}: CheckboxButtonPorps<T>) => {
  if (!checkboxs?.length && checkbox) {
    return (
      <ComponentCheckboxButton checkbox={checkbox} formik={formik} {...props} />
    );
  }
  return (
    <div className={cx("flex flex-col w-full gap-4", classes?.wrapper)}>
      {label && <Label>{label}</Label>}
      <div
        className={cx(
          "flex flex-wrap gap-10 h-full justify-center",
          classes?.container
        )}
      >
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
    </div>
  );
};

export { CheckboxButton };

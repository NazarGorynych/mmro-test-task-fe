import { Field, Label } from "@components/index";
import cx from "clsx";
import { FormikValues } from "formik";

import { AmountRadioProps, ComponentAmountRadioProps } from "./index.types";

const ComponentAmountRadio = <T extends FormikValues>({
  amount,
  formik,
  ...props
}: ComponentAmountRadioProps<T>) => {
  if (!amount) {
    return null;
  }
  const value = formik.values[props?.name as string];

  return (
    <Field
      type="radio"
      name="amount"
      className="hidden"
      classes={{
        label: cx(
          "text-xs font-bold py-3 px-6 rounded-3xl border border-black cursor-pointer",
          { "bg-black text-white": `${amount.value}` === value }
        )
      }}
      onChange={formik.handleChange}
      key={amount.id}
      label={amount.title}
      id={`${amount.value}`}
      value={amount.value}
      {...props}
    />
  );
};

const AmountRadio = <T extends FormikValues>({
  amounts,
  formik,
  label,
  classes,
  ...props
}: AmountRadioProps<T>) => {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <Label
          className={cx(
            " text-base font-bold text-seconderyGray",
            classes?.label
          )}
        >
          {label}
        </Label>
      )}
      <div className="flex gap-6 flex-wrap">
        {amounts?.map((amount) => {
          return (
            <ComponentAmountRadio
              key={amount.id}
              formik={formik}
              amount={amount}
              {...props}
            />
          );
        })}
      </div>
    </div>
  );
};

export { AmountRadio };

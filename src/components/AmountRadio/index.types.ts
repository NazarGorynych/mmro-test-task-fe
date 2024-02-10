import { AmmoutRadioType, Classes } from "@utils/types";
import { FormikProps, FormikValues } from "formik";
import { ComponentProps } from "react";

export type ComponentAmountRadioProps<T extends FormikValues> =
  ComponentProps<"input"> & {
    amount?: AmmoutRadioType;
    formik: FormikProps<T>;
  };

export type AmountRadioProps<T extends FormikValues> =
  ComponentAmountRadioProps<T> & {
    amounts?: AmmoutRadioType[];
    label?: string;
    classes?: Classes & {
      label?: string;
    };
  };

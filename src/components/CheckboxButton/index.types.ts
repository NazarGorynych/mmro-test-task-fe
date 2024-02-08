import { CheckboxButtonType, Classes } from "@utils/types";
import { FormikProps, FormikValues } from "formik";
import { ComponentProps } from "react";

export type ComponentCheckboxButtonPorps<T extends FormikValues> =
  ComponentProps<"input"> & {
    checkbox?: CheckboxButtonType;
    formik: FormikProps<T>;
  };

export type CheckboxButtonPorps<T extends FormikValues> =
  ComponentCheckboxButtonPorps<T> & {
    checkboxs?: CheckboxButtonType[];
    label?: string;
    classes?: Classes;
  };

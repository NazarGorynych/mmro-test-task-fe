import { Classes } from "@utils/types";
import type { ComponentProps } from "react";

export type FieldProps = ComponentProps<"input"> & {
  classes?: Classes & {
    label?: string;
    helperText?: string;
  };
  label?: string;
  helperText?: string;
  full?: boolean;
};

export type TypeField = "main";
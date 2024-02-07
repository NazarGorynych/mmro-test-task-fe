import { Classes } from "@utils/types";
import type { HTMLAttributes } from "react";

export type FieldProps = HTMLAttributes<HTMLInputElement> & {
  classes?: Classes;
};

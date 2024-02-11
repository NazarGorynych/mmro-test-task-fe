import { ComponentProps } from "react";

export type FileProps = ComponentProps<"input"> & {
  helperText?: any;
};

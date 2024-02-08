import { PropsWithChildren, ComponentProps } from "react";

export type Class = "white" | "transparent";

export type ComponentFormProps = PropsWithChildren &
  ComponentProps<"form"> & {
    type?: Class;
  };

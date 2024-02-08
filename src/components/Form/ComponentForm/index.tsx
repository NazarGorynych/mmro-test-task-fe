import cx from "clsx";
import { FC } from "react";

import { classes } from "./index.constants";
import { ComponentFormProps } from "./index.types";

const ComponentForm: FC<ComponentFormProps> = ({
  type = "transparent",
  children,
  className,
  ...props
}) => {
  return (
    <form className={cx(classes[type], className)} {...props}>
      {children}
    </form>
  );
};

export { ComponentForm };

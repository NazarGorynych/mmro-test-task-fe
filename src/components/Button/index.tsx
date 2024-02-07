import cx from "classnames";
import type { FC } from "react";

import {
  colorClasses,
  borderClasses,
  positionClasses,
  sizeClasses
} from "./index.constants";
import type { ButtonProps } from "./index.types";

const Button: FC<ButtonProps> = ({
  children,
  color = "main",
  rounded = "normal",
  positionText = "center",
  sizeButton = "md",
  className,
  full = false,
  ...props
}) => {
  return (
    <button
      className={cx(
        "flex px-11",
        full ? "w-full" : "w-fit",
        colorClasses[color],
        borderClasses[rounded],
        positionClasses[positionText],
        sizeClasses[sizeButton],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
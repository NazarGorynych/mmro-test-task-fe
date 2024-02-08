import cx from "clsx";
import { FC } from "react";

import { LabelProps } from "./index.types";

const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label
      {...props}
      className={cx("text-black text-base font-bold", props.className)}
    >
      {children}
    </label>
  );
};

export { Label };

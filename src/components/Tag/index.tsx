import cx from "clsx";
import { FC } from "react";

import { colors } from "./index.constants";
import { TagProps } from "./index.types";

const Tag: FC<TagProps> = ({ color = "blue", text }) => {
  return (
    <span
      className={cx(colors[color], "text-xs font-bold px-3 py-2 rounded-2xl")}
    >
      {text}
    </span>
  );
};

export { Tag };

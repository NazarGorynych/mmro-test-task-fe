import { FC } from "react";

import { FieldProps } from "./index.types";

const Field: FC<FieldProps> = ({ classes, ...props }) => {
  return (
    <div className={classes?.wrapper}>
      <div className={classes?.wrapper}>
        <input {...props} />
      </div>
    </div>
  );
};

export { Field };

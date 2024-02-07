import { FC } from "react";

import { FieldProps } from "./index.types";

const Field: FC<FieldProps> = ({
  classes,
  label,
  helperText,
  id,
  ...props
}) => {
  return (
    <div className={classes?.wrapper}>
      <div className={classes?.wrapper}>
        {label && (
          <label className={classes?.label} htmlFor={id}>
            {label}
          </label>
        )}
        <input id={id} {...props} />
        {helperText && (
          <span className={classes?.helperText}>{helperText}</span>
        )}
      </div>
    </div>
  );
};

export { Field };

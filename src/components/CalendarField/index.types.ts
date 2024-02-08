import { Classes } from "@utils/types";

export type CalendarFieldProps = {
  name: string;
  setFieldValue: (name: string, value: Date | null) => void;
  value?: Date;
  isRequred?: boolean;
  helperText?: string;
  label?: string;
  classes?: Classes & {
    label?: string;
    helperText?: string;
  };
};

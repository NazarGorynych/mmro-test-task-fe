import { Classes } from "@utils/types";

export type CalendarFieldProps = {
  name: string;
  setFieldValue: (name: string, value: any) => void;
  value?: Date;
  isRequred?: boolean;
  helperText?: string | boolean;
  label?: string;
  classes?: Classes & {
    label?: string;
    helperText?: string;
  };
};

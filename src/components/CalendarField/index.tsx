import { Datepicker } from "@aliakbarazizi/headless-datepicker";
import { Icon, Label } from "@components/index";
import cx from "clsx";
import moment from "moment";
import { FC, useState } from "react";

import { CalendarFieldProps } from "./index.types";

const CalendarField: FC<CalendarFieldProps> = (props) => {
  const { name, setFieldValue, classes, label, isRequred, helperText } = props;
  const [value, setValue] = useState<Date | null>(props.value || new Date());
  const handleChange = (value: Date | null) => {
    setValue(value);
    const date = moment(value).format();
    setFieldValue(name, date);
  };
  return (
    <div
      className={cx(
        "flex flex-col w-auto gap-4 relative pb-2",
        classes?.container
      )}
    >
      {label && (
        <Label
          isRequred={isRequred}
          className={cx(classes?.label, {
            "!text-error": Boolean(helperText)
          })}
        >
          {label}
        </Label>
      )}
      <Datepicker onChange={handleChange} value={value}>
        <div className="flex rounded-4xl border-black border px-4 bg-white group">
          <Datepicker.Input
            format="dd/MM/yyyy"
            className={
              "!border-none !outline-none !h-12 !shadow-none !ring-offset-0 !p-0 !ring-0 w-full max-w-full text-black"
            }
          />
          <Datepicker.Button
            type="button"
            action="toggle"
            className="px-3.5 py-3"
          >
            <Icon type="CalendarIcon" className="group-hover:fill-black" />
          </Datepicker.Button>
        </div>
        <Datepicker.Picker
          defaultType="day"
          className="rounded-md bg-black p-4 shadow-md z-[100] dark:bg-gray-800 dark:text-gray-300 w-[352px]"
        >
          {({ monthName, year }) => (
            <>
              <div className="flex w-full items-center justify-between space-x-6 py-2 rtl:space-x-reverse">
                <Datepicker.Button
                  action="prev"
                  className="rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
                >
                  Prev
                </Datepicker.Button>
                <div className="flex">
                  <Datepicker.Button
                    action="toggleMonth"
                    className="leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white"
                  >
                    {monthName}
                  </Datepicker.Button>
                  <Datepicker.Button
                    action="toggleYear"
                    className="leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white"
                  >
                    {year}
                  </Datepicker.Button>
                </div>
                <Datepicker.Button
                  action="next"
                  className="rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
                >
                  Next
                </Datepicker.Button>
              </div>
              <Datepicker.Items
                className={({ type }) =>
                  cx(
                    "grid w-full auto-rows-max gap-4 overflow-y-auto scroll-smooth",
                    type == "day" && "grid-cols-7",
                    type == "month" && "grid-cols-3",
                    type == "year" && "max-h-[274px] grid-cols-4"
                  )
                }
              >
                {({ items }) =>
                  items.map((item) => (
                    <Datepicker.Item
                      key={item.key}
                      item={item}
                      className={cx(
                        "grid items-center justify-center rounded-full py-1.5 text-sm font-medium select-none",
                        item.isHeader ? "cursor-default" : "hover:bg-gray-700",
                        "isInCurrentMonth" in item && item.isInCurrentMonth
                          ? "text-gray-500"
                          : "hover:text-white",
                        item.type === "day" && "h-8 w-8",
                        item.isSelected && "bg-gray-600",
                        item.isToday && "border border-gray-500"
                      )}
                      action={
                        item.type === "day"
                          ? "close"
                          : item.type === "month"
                            ? "showDay"
                            : "showMonth"
                      }
                    >
                      {item.isHeader ? item.text.substring(0, 2) : item.text}
                    </Datepicker.Item>
                  ))
                }
              </Datepicker.Items>
            </>
          )}
        </Datepicker.Picker>
      </Datepicker>
      {helperText && (
        <span
          className={cx(
            "text-error text-xs font-light absolute top-full",
            classes?.helperText
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export { CalendarField };

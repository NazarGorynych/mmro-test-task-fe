import { Datepicker } from "@aliakbarazizi/headless-datepicker";
import { Icon } from "@components/index";
import cx from "clsx";
import moment from "moment";
import { FC } from "react";

import { DatePickerComponentProps } from "./index.types";

const dateFormat = "MMM/DD/YYYY";

const DatePickerComponent: FC<DatePickerComponentProps> = (props) => {
  const initDate = moment().subtract(18, "years").toDate();
  const initPlaceholder = moment().subtract(18, "years").format(dateFormat);
  const { setValue, value, name, placeholder = initPlaceholder } = props;

  const handleValueChange = (newValue: any) => {
    setValue(name, newValue);
  };

  return (
    <Datepicker onChange={handleValueChange} value={value}>
      <Datepicker.Button
        type="button"
        action="toggle"
        className="flex w-full px-3.5 py-3"
      >
        <p
          className={cx(
            "grow text-left text-base font-normal font-inter leading-relaxed",
            value ? "text-white" : "text-accent-1"
          )}
        >
          {value ? moment(value).format(dateFormat) : placeholder}
        </p>
        <div className="flex-none relative w-5 h-5">
          <Icon type="CalendarIcon" />
        </div>
      </Datepicker.Button>

      <Datepicker.Picker
        defaultType="day"
        className="rounded-md bg-white p-4 shadow-md dark:bg-gray-800 dark:text-gray-300 w-[352px] z-10"
      >
        {({ monthName, year }) => (
          <>
            <div className="flex w-full items-center justify-between space-x-6 py-2 rtl:space-x-reverse">
              <Datepicker.Button
                type="button"
                action="prev"
                className="rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
              >
                <div className="relative w-4 h-4 rotate-90">
                  {/* <Image fill src="./icons/chevron-down.svg" alt="chevron" /> */}
                </div>
              </Datepicker.Button>
              <div className="flex">
                <Datepicker.Button
                  type="button"
                  action="toggleMonth"
                  className="leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white"
                >
                  {monthName}
                </Datepicker.Button>
                <Datepicker.Button
                  type="button"
                  action="toggleYear"
                  className="leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white"
                >
                  {year}
                </Datepicker.Button>
              </div>
              <Datepicker.Button
                type="button"
                action="next"
                className="rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
              >
                <div className="relative w-4 h-4 -rotate-90">
                  {/* <Image fill src="./icons/chevron-down.svg" alt="chevron" /> */}
                </div>
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
                    disabled={
                      (item.type === "day" &&
                        moment(item.value).isAfter(initDate)) ||
                      item.disabled
                    }
                    className={cx(
                      "grid items-center justify-center rounded-full py-1.5 text-sm font-medium select-none",
                      item.isHeader ? "cursor-default" : "hover:bg-gray-700",
                      "isInCurrentMonth" in item && item.isInCurrentMonth
                        ? "text-gray-500"
                        : "hover:text-white",
                      item.type === "day" && "h-8 w-8",
                      item.isSelected && "bg-gray-600",
                      item.isToday && "border border-gray-500",
                      item.type === "day" &&
                        moment(item.value).isAfter(initDate) &&
                        "line-through"
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
  );
};

export { DatePickerComponent };

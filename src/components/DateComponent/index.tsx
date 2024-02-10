import moment from "moment";
import { FC } from "react";

import { DateComponentProps } from "./index.types";

const DateComponent: FC<DateComponentProps> = ({ date, label }) => {
  const currentDate = moment(date).format("MM.DD.YYYY, h:mm");
  const [usedDate, time] = currentDate.split(",");
  return (
    <div className="flex flex-col">
      <span className="text-base font-bold text-seconderyGray">{label}</span>
      <div className="flex gap-2">
        <span className="bg-[#F6F6F6] text-sm text-black py-2.5 px-3.5 rounded-3xl">
          {usedDate}
        </span>
        <span className="bg-[#F6F6F6] text-sm text-black py-2.5 px-3.5 rounded-3xl">
          {time}
        </span>
      </div>
    </div>
  );
};

export { DateComponent };

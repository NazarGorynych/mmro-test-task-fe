import { Typography, DateComponent, InitialRate, Tag } from "@components/index";
import { ColorsTag } from "@utils/types";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AuctionProps } from "./index.types";

const Auction: FC<AuctionProps> = ({
  id,
  title,
  description,
  min_bid,
  min_bid_diff,
  bid_type,
  status,
  start_date,
  end_date,
  main_image,
  winner_id,
  user_id,
  created_at,
  updated_at
}) => {
  const navigate = useNavigate();

  return (
    <article className="flex gap-[20px] p-4 bg-none relative w-full max-h-[682px]">
      {main_image && (
        <img
          className="w-96 h-96 rounded-2xl"
          src={main_image}
          alt="main-image"
        />
      )}
      <div className="flex flex-col h-full overflow-auto gap-[24px] w-full grid-cols-2">
        <div className="flex flex-wrap gap-2 max-w-40">
          <Tag color={status.toLocaleLowerCase() as ColorsTag} text={status} />
        </div>
        <Typography tag="h2" text={title} />
        <Typography
          className="w-full max-h-[120px]"
          tag="p"
          text={description}
        />
        <InitialRate label="Початкова ставка:" rate={min_bid} />
        {end_date && (
          <DateComponent label={"Дата закінчення аукціону"} date={end_date} />
        )}
        <div className="flex absolute right-4 gap-2">
          <img
            className="max-w-[40px] max-h-[40px] rounded-lg"
            src={process.env.PUBLIC_URL + "/images/sample-person.png"}
            alt=""
          />
          <ul className="max-h-[40px]">
            {/* <Typography
              className="font-bold"
              tag="p"
              text={`${auctioneer.firstname}`}
            />
            <Typography
              className="font-bold"
              tag="p"
              text={`${auctioneer.lastname}`}
            /> */}
          </ul>
        </div>
      </div>
    </article>
  );
};

export { Auction };

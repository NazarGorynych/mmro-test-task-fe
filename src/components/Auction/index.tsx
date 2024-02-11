import { Typography, DateComponent, InitialRate } from "@components/index";
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
  winner_id,
  user_id,
  created_at,
  updated_at
}) => {
  const navigate = useNavigate();

  return (
    <article className="flex gap-[20px] p-4 bg-none relative w-full max-h-[682px]">
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <img
          className="h-auto max-w-full rounded-lg"
          src={process.env.PUBLIC_URL + "/images/auction-image.png"}
          alt=""
        />
        <img
          className="h-auto max-w-full rounded-lg col-span-2 row-span-2"
          src={process.env.PUBLIC_URL + "/images/auction-image-xl.png"}
          alt=""
        />
        <img
          className="h-auto max-w-full rounded-lg"
          src={process.env.PUBLIC_URL + "/images/auction-image.png"}
          alt=""
        />
        <img
          className="h-auto max-w-full rounded-lg"
          src={process.env.PUBLIC_URL + "/images/auction-image.png"}
          alt=""
        />
        <img
          className="h-auto max-w-full rounded-lg"
          src={process.env.PUBLIC_URL + "/images/auction-image.png"}
          alt=""
        />
        <img
          className="h-auto max-w-full rounded-lg"
          src={process.env.PUBLIC_URL + "/images/auction-image.png"}
          alt=""
        />
      </div>
      <div className="flex flex-col h-full overflow-auto gap-[24px] w-full">
        <div className="flex flex-wrap w-full h-[40px]">
          {/* {tags.map((tag) => {
            return <Tag key={tag.id} text={tag.text} />;
          })} */}
        </div>
        <Typography tag="h2" text={title} />
        <Typography
          className="w-full max-h-[120px]"
          tag="p"
          text={description}
        />
        <InitialRate label="Початкова ставка:" rate={min_bid} />
        <DateComponent label={"Дата закінчення аукціону"} date={end_date} />
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

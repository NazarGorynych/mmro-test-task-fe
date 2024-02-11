import {
  Icon,
  Typography, // Tag,
  DateComponent,
  InitialRate,
  Button
} from "@components/index";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AuctionCardProps } from "./index.types";

const AuctionCard: FC<AuctionCardProps> = ({
  title,
  description,
  min_bid,
  min_bid_diff,
  bid_type,
  status,
  start_date: startDate,
  end_date: endDate,
  handleOpenConfirm,
  winner_id,
  user_id,
  created_at,
  updated_at,
  isUserCard,
  id
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`${id}`);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (handleOpenConfirm) {
      event.stopPropagation(); // Prevents the click event from reaching the card
      handleOpenConfirm(id);
    }
  };

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevents the click event from reaching the card
    navigate(`${id}`);
  };

  return (
    <article
      className="flex gap-6 p-4 bg-white shadow-xl rounded-4xl relative w-full h-80 hover:shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <img src={process.env.PUBLIC_URL + "/images/auction-image.png"} />
      <div className="flex flex-col max-h-80 overflow-auto gap-2 w-full">
        <div className="flex flex-wrap gap-2 max-w-40"></div>
        <Typography tag="h4" text={title} />
        <InitialRate label="Початкова ставка:" rate={min_bid} />
        {isUserCard && (
          <DateComponent
            label={"Дата початку аукціону"}
            date={"2023-01-28T15:35:01.123Z"}
          />
        )}
        <DateComponent
          label={"Дата закінчення аукціону"}
          date={"2023-01-28T15:35:01.123Z"}
        />
        {isUserCard ? (
          <div className="flex absolute top-4 right-4 gap-2">
            <Button
              onClick={handleDeleteClick}
              className="!p-0"
              color="transparent"
            >
              <Icon type={"DeleteIcon"} className="hover:fill-[#FF3333]" />
            </Button>
            <Button
              onClick={handleEditClick}
              className="!p-0"
              color="transparent"
            >
              <Icon type={"EditIcon"} className="hover:fill-primeryBlue" />
            </Button>
          </div>
        ) : (
          <div>
            <span></span>
          </div>
        )}
      </div>
    </article>
  );
};

export { AuctionCard };

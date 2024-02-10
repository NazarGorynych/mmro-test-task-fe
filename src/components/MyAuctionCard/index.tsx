import {
  Icon,
  Typography,
  Tag,
  DateComponent,
  InitialRate,
  Button
} from "@components/index";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { MyAuctionCardProps } from "./index.types";

const MyAuctionCard: FC<MyAuctionCardProps> = ({
  tags,
  title,
  initialRate,
  id,
  handleOpenConfirm,
  startDate,
  endDate
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`${id}`);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevents the click event from reaching the card
    handleOpenConfirm(id);
  };

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevents the click event from reaching the card
    navigate(`${id}`);
  };

  return (
    <article className="flex gap-6 p-4 bg-white shadow-xl rounded-4xl relative w-full h-80 hover:shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer" onClick={handleCardClick}>
      <img src={process.env.PUBLIC_URL + "/images/auction-image.png"} />
      <div className="flex flex-col max-h-80 overflow-auto gap-2 w-full">
        <div className="flex flex-wrap gap-2 max-w-40">
          {tags.map((tag) => {
            return <Tag key={tag.id} text={tag.text} />;
          })}
        </div>
        <Typography tag="h4" text={title} />
        <InitialRate label="Початкова ставка:" rate={initialRate} />
        <DateComponent label={"Дата початку аукціону"} date={startDate} />
        <DateComponent label={"Дата закінчення аукціону"} date={endDate} />
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
      </div>
    </article>
  );
};

export { MyAuctionCard };
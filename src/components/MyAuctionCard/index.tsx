import {
  Icon,
  Typography,
  Tag,
  DateComponent,
  InitialRate,
  Button
} from "@components/index";
import { FC } from "react";
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

  return (
    <article className="flex gap-6 p-4 bg-white shadow-xl rounded-4xl relative w-full h-80">
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
            onClick={() => handleOpenConfirm(id)}
            className="!p-0"
            color="transparent"
          >
            <Icon type={"DeleteIcon"} className="hover:fill-[#FF3333]" />
          </Button>
          <Button
            onClick={() => navigate(`${id}`)}
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

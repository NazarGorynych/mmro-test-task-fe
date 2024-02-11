import { ComponentForm } from "@components/Form/ComponentForm";
import {
  incereaseBidCheckboxs,
  initialValues
} from "@components/Form/CreateAction/index.constants";
import { CreateActionValues } from "@components/Form/CreateAction/index.types";
import {
  Typography,
  DateComponent,
  InitialRate,
  Tag,
  CheckboxButton,
  Button
} from "@components/index";
import { ColorsTag } from "@utils/types";
import { useFormik } from "formik";
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
  const handleSubmit = (values: CreateActionValues) => {
    console.log(values, "values");
  };
  const formik = useFormik<CreateActionValues>({
    initialValues,
    onSubmit: handleSubmit
  });
  const nextMinBid = 100;

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
        <hr className="h-px my-4 bg-gray-200 dark:bg-gray-700" />

        <ComponentForm type="transparent">
          <CheckboxButton<CreateActionValues>
            formik={formik}
            checkboxs={incereaseBidCheckboxs}
            classes={{
              container: "!justify-between !gap-4"
            }}
            label={"Введіть суму на яку хочете зробити ставку в гривнях"}
          />
          <div className={"grid rows-2 gap-[24px] pt-[24px]"}>
            <Button
              color={"secondary"}
              rounded={"normal"}
              positionText={"center"}
              sizeButton={"xl"}
              full={true}
              className={"!min-h-[72px]"}
            >
              <Typography tag="h5" text={`${nextMinBid} грн`} />
            </Button>
            <Button
              color={"main"}
              rounded={"normal"}
              positionText={"center"}
              sizeButton={"xl"}
              full={true}
            >
              <Typography
                className={"text-white"}
                tag="h6"
                text={"Зробити ставку"}
              />
            </Button>
          </div>
        </ComponentForm>
      </div>
    </article>
  );
};

export { Auction };

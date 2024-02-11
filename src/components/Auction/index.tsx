import { Typography, Tag, DateComponent, InitialRate, CheckboxButton, Button } from "@components/index";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AuctionProps } from "./index.types";
import { ComponentForm } from "@components/Form/ComponentForm";
import { CreateActionValues } from "@components/Form/CreateAction/index.types";
import { incereaseBidCheckboxs, initialValues } from "@components/Form/CreateAction/index.constants";
import { useFormik } from "formik";

const Auction: FC<AuctionProps> = ({
  tags,
  title,
  initialRate,
  id,
  startDate,
  endDate,
  auctioneer
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
      <div className="flex flex-col h-full overflow-auto w-full">
        <div className="flex flex-col h-full overflow-auto w-full gap-[24px]">
          <div className="flex flex-wrap w-full h-[40px]">
            {tags.map((tag) => {
              return <Tag key={tag.id} text={tag.text} />;
            })}
          </div>
          <Typography tag="h2" text={title} />
          <Typography
            className="w-full max-h-[120px]"
            tag="p"
            text="Sed  tuibusdam et aut officiis debitis aut rerum necessitatibum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          />
          <InitialRate label="Початкова ставка:" rate={initialRate} />
          <DateComponent label={"Дата закінчення аукціону"} date={endDate} />
          <div className="flex absolute right-4 gap-2">
            <img
              className="max-w-[40px] max-h-[40px] rounded-lg"
              src={process.env.PUBLIC_URL + "/images/sample-person.png"}
              alt=""
            />
            <ul className="max-h-[40px]">
              <Typography
                className="font-bold"
                tag="p"
                text={`${auctioneer.firstname}`}
              />
              <Typography
                className="font-bold"
                tag="p"
                text={`${auctioneer.lastname}`}
              />
            </ul>
          </div>
        </div>
        <hr className="h-px my-4 bg-gray-200 dark:bg-gray-700"/>

        <ComponentForm
          type="transparent"
        >
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
              className={"!min-h-[72px]"}>
              <Typography tag="h5" text={`${nextMinBid} грн`}/>
            </Button>
            <Button
              color={"main"}
              rounded={"normal"}
              positionText={"center"}
              sizeButton={"xl"}
              full={true}
              >
              <Typography className={"text-white"} tag="h6" text={"Зробити ставку"}/>
            </Button>
          </div>
        </ComponentForm>
      </div>
    </article>
  );
};

export { Auction };

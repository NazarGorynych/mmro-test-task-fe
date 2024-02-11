import {
  Typography,
  DateComponent,
  InitialRate,
  Tag,
  AmountRadio,
  Button,
  Field
} from "@components/index";
import { ColorsTag } from "@utils/types";
import { useFormik } from "formik";
import { FC, useEffect, ChangeEvent } from "react";
import toast from "react-hot-toast";

import { radioAmount, initialValues } from "./index.constants";
import { AuctionProps, AuctionValues } from "./index.types";

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
  const handleSubmit = (values: AuctionValues) => {
    console.log(values, "values");
    // replenishBalance(values.balance);
    toast.success("Баланс успішно поповнений");
  };
  const formik = useFormik<AuctionValues>({
    initialValues,
    onSubmit: handleSubmit
  });
  const { values } = formik;
  const { amount, balance } = values;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    formik.setFieldValue("balance", value);
    formik.setFieldValue("amount", value);
  };

  useEffect(() => {
    if (amount) {
      formik.setFieldValue("balance", amount);
    }
  }, [amount]);
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
        <hr className="h-px my-4 bg-gray-200 dark:bg-gray-700" />

        <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
          <AmountRadio name={"amount"} amounts={radioAmount} formik={formik} />
          <Field
            full
            value={balance}
            type="number"
            name="balance"
            className="!rounded-2xl !py-6 h-20 text-center text-xl font-bold"
            onChange={handleChange}
          />
          <Button full={true}>Зробити ставку</Button>
        </form>
      </div>
    </article>
  );
};

export { Auction };

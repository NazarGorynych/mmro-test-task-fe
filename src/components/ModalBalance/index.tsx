import { Modal, Button, Field } from "@components/index";
import cx from "clsx";
import { useFormik } from "formik";
import { ChangeEvent, FC, useEffect } from "react";

import { radioAmount, initialValues } from "./index.constants";
import { ModalBalanceProps, ModalBalanceValues } from "./index.types";

const ModalBalance: FC<ModalBalanceProps> = ({ open, onClose }) => {
  const handleSubmit = () => {};
  const formik = useFormik<ModalBalanceValues>({
    initialValues,
    onSubmit: handleSubmit
  });
  const { values } = formik;
  const { amount, balance } = values;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    formik.setFieldValue("balance", value);
    formik.setFieldValue("amount", null);
  };

  useEffect(() => {
    if (amount) {
      formik.setFieldValue("balance", amount);
    }
  }, [amount]);

  return (
    <Modal onClose={onClose} open={open}>
      <form className="flex-col flex gap-6" onSubmit={formik.handleSubmit}>
        <Modal.Header onClose={onClose} />
        <Modal.Body className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <label className=" text-base font-bold text-seconderyGray">
              Введіть суму на яку хочете поповнити свій рахунок в гривнях
            </label>
            <div className="flex gap-6 flex-wrap">
              {radioAmount.map((radio) => {
                const checked = amount === `${radio.value}`;
                return (
                  <Field
                    type="radio"
                    name="amount"
                    className="hidden"
                    classes={{
                      label: cx(
                        "text-xs font-bold py-3 px-6 rounded-3xl border border-black cursor-pointer",
                        { "bg-black text-white": checked }
                      )
                    }}
                    onChange={formik.handleChange}
                    key={radio.id}
                    label={radio.label}
                    id={`${radio.value}`}
                    value={radio.value}
                  />
                );
              })}
            </div>
          </div>
          <Field
            full
            value={balance}
            type="number"
            name="balance"
            className="!rounded-2xl !py-6 h-20 text-center text-xl font-bold"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer className="flex gap-6">
          <Button color="secondary">Назад</Button>
          <Button className="flex-1">Поповнити баланс</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export { ModalBalance };

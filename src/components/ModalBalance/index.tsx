import { Modal, Button, Field, AmountRadio } from "@components/index";
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
          <AmountRadio amounts={radioAmount} formik={formik} />
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

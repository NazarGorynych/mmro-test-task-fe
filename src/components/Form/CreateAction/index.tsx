import {
  Typography,
  Field,
  CalendarField,
  Button,
  File,
  Spinner
} from "@components/index";
import { useStores } from "@hooks/index";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ComponentForm } from "../ComponentForm";
import { initialValues } from "./index.constants";
import { CreateActionValues } from "./index.types";

const validationSchema = Yup.object({
  main_image: Yup.string().required("Аватарка є обов'язковой"),
  title: Yup.string().required("Поле є обов'язковим"),
  description: Yup.string().required("Поле є обов'язковим"),
  min_bid: Yup.number()
    .required("Поле є обов'язковим")
    .positive("Значення має бути більше 0")
    .integer("Значення має бути цілим числом"),
  start_date: Yup.string().required("Поле є обов'язковим"),
  end_date: Yup.string().required("Поле є обов'язковим")
});

const CreateAction = observer(() => {
  const {
    resource: { createUserAuctions }
  } = useStores();
  const navigate = useNavigate();

  const handleSubmit = async (values: CreateActionValues) => {
    const formData = new FormData();
    formData.append("file", values.main_image);
    Object.entries(values).forEach(([name, value]) =>
      formData.append(name, value)
    );
    await createUserAuctions(formData);
    toast.success("Аукціон був створений");
    navigate("/");
  };

  const formik = useFormik<CreateActionValues>({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema
  });

  const goBack = () => {
    navigate(-1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFieldValue("main_image", event.currentTarget.files[0]);
    }
  };

  const { values, errors, setFieldValue, touched } = formik;
  const { title, description, min_bid, main_image } = values;

  return (
    <ComponentForm
      onSubmit={formik.handleSubmit}
      className="max-w-4xl relative"
      type="white"
    >
      {formik.isSubmitting && <Spinner />}
      <Typography text="Створення нового аукціону" tag="h2" />
      <File
        value={main_image}
        name={"main_image"}
        onChange={handleChange}
        id={"cover"}
        helperText={touched.main_image && errors?.main_image}
      />
      <Field
        value={title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label={"Назва"}
        full
        isRequred
        placeholder="Назва"
        name="title"
        helperText={touched.title && errors?.title}
      />
      <Field
        value={description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        full
        isRequred
        label={"Опис"}
        placeholder="Опис"
        name="description"
        helperText={touched.description && errors?.description}
      />
      <Field
        isRequred
        value={min_bid}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label={"Початкова ставка"}
        type="number"
        placeholder="12 000"
        name={"min_bid"}
        helperText={touched.min_bid && errors?.min_bid}
      />
      {/* <CheckboxButton<CreateActionValues>
        formik={formik}
        checkboxs={checkboxs}
        classes={{
          container: "!justify-start"
        }}
        label={"Категорія"}
        name={"categors"}
      /> */}
      <CalendarField
        label="Дата старту аукціону"
        name="start_date"
        setFieldValue={setFieldValue}
        helperText={touched?.start_date && errors?.start_date}
      />
      <CalendarField
        label="Дата закінчення аукціону"
        name="end_date"
        setFieldValue={setFieldValue}
        helperText={touched?.end_date && errors?.end_date}
      />
      <div className="flex gap-8">
        <Button
          onClick={goBack}
          className=" max-w-56"
          full
          type={"button"}
          color={"secondary"}
        >
          Назад
        </Button>
        <Button className=" max-w-56" full type={"submit"}>
          Створити
        </Button>
      </div>
    </ComponentForm>
  );
});

export { CreateAction };

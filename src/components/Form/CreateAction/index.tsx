import {
  Typography,
  CheckboxButton,
  Field,
  CalendarField,
  Button,
  File
} from "@components/index";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { ComponentForm } from "../ComponentForm";
import { initialValues, checkboxs } from "./index.constants";
import { CreateActionValues } from "./index.types";

const CreateAction = () => {
  const handleSubmit = (values: CreateActionValues) => {
    console.log(values, "values");
  };
  const formik = useFormik<CreateActionValues>({
    initialValues,
    onSubmit: handleSubmit
  });
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { values, errors, setFieldValue } = formik;
  const { name, description, initialRate } = values;
  return (
    <ComponentForm
      onSubmit={formik.handleSubmit}
      className="max-w-4xl "
      type="white"
    >
      <Typography text="Створення нового аукціону" tag="h2" />
      <File
        name={"cover"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id={"name"}
      />
      <Field
        value={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label={"Назва"}
        full
        isRequred
        placeholder="Назва"
        name="name"
        helperText={errors && errors?.name}
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
        helperText={errors && errors?.description}
      />
      <Field
        value={initialRate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label={"Початкова ставка"}
        type="number"
        placeholder="12 000"
        name={"initialRate"}
        helperText={errors && errors?.initialRate}
      />
      <CheckboxButton<CreateActionValues>
        formik={formik}
        checkboxs={checkboxs}
        classes={{
          container: "!justify-start"
        }}
        label={"Категорія"}
      />
      <CalendarField
        label="Дата старту аукціону"
        name="startDate"
        setFieldValue={setFieldValue}
      />
      <CalendarField
        label="Дата закінчення аукціону"
        name="endDate"
        setFieldValue={setFieldValue}
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
};

export { CreateAction };

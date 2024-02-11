import { Typography, Button, Field } from "@components/index";
import { useStores } from "@hooks/index";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ComponentForm } from "../ComponentForm";
import { SignUpValues } from "./index.types";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Неправильна адреса електронної пошти")
    .required("Поле є обов'язковим"),
  password: Yup.string()
    .min(8, "Пароль повинен містити понад 8 символів")
    .matches(/[a-z]/, "Пароль повинен містити хоча б одну маленьку літеру")
    .matches(/[A-Z]/, "Пароль повинен містити хоча б одну велику літеру")
    .required("Поле є обов'язковим"),
  name: Yup.string().required("Поле є обов'язковим"),
  lastname: Yup.string().required("Поле є обов'язковим")
});

const SignUp = observer(() => {
  const {
    resource: { user, signUp, error }
  } = useStores();
  const navigation = useNavigate();
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  const handleSubmit = async (values: SignUpValues) => {
    const { email, password, name, lastname } = values;
    signUp({ email, password, name, lastname }).then((res) => {
      if (res) {
        if (redirectTo) {
          navigation(redirectTo);
        } else {
          navigation("/");
        }
      }
    });
  };

  const formik = useFormik<SignUpValues>({
    initialValues: {
      email: "",
      password: "",
      lastname: "",
      name: ""
    },
    validationSchema,
    onSubmit: handleSubmit
  });
  useEffect(() => {
    const referrer = document.referrer;
    const url = referrer ? new URL(referrer).pathname : `/`;

    if (url && !user) {
      setRedirectTo(url);
    } else if (user) {
      navigation(url, { replace: true });
    }
  }, [user]);

  return (
    <ComponentForm onSubmit={formik.handleSubmit} type="white">
      <Typography text="Створити аккаунт" tag="h2" />
      <span className="text-sm flex gap-1 text-black font-light">
        У вас вже є акаунт?
        <Link className="text-sm text-primeryBlue font-bold" to={"/login"}>
          Увійти
        </Link>
      </span>
      <Field
        isRequred
        name={"name"}
        onChange={formik.handleChange}
        onBlur={formik.handleChange}
        helperText={formik.touched?.name && formik.errors?.name}
        label={"Ім'я"}
        full
      />
      <Field
        isRequred
        name={"lastname"}
        onChange={formik.handleChange}
        onBlur={formik.handleChange}
        helperText={formik.touched?.lastname && formik.errors?.lastname}
        label={"Фамілія"}
        full
      />
      <Field
        isRequred
        name={"email"}
        onChange={formik.handleChange}
        onBlur={formik.handleChange}
        helperText={formik.touched?.email && formik.errors?.email}
        label={"Email"}
        full
      />
      <Field
        isRequred
        name={"password"}
        onChange={formik.handleChange}
        onBlur={formik.handleChange}
        helperText={formik.touched?.password && formik.errors?.password}
        label={"Пароль"}
        full
      />
      <div className="flex gap-4">
        <Button type="button" color="secondary" full>
          Назад
        </Button>
        <Button type="submit" full>
          Зареєструватись
        </Button>
      </div>
      {error && (
        <span className="text-error text-xs font-light w-full text-center">
          {error}
        </span>
      )}
    </ComponentForm>
  );
});

export { SignUp };

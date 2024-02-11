import { Typography, Button, Icon, Field } from "@components/index";
import { useStores } from "@hooks/index";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { ComponentForm } from "../ComponentForm";
import { SignInValues } from "./index.types";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Неправильна адреса електронної пошти")
    .required("Поле пароль є обов'язковим"),
  password: Yup.string()
    .min(8, "Пароль повинен містити понад 8 символів")
    .matches(/[a-z]/, "Пароль повинен містити хоча б одну маленьку літеру")
    .matches(/[A-Z]/, "Пароль повинен містити хоча б одну велику літеру")
    .required("Поле пароль є обов'язковим")
});

const SignIn = observer(() => {
  const {
    auth: { signIn, isLoading }
  } = useStores();

  const handleSubmit = (values: SignInValues) => {
    const { email, password } = values;
    signIn({ email, password });
  };
  console.log(isLoading, "isLoading");
  const formik = useFormik<SignInValues>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: handleSubmit
  });
  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse, "credentialResponse");

      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${credentialResponse.access_token}`
            }
          }
        );
        console.log(res, "res");
      } catch (error) {
        console.log(error, "error");
      }
      console.log(credentialResponse);
    }
  });
  return (
    <ComponentForm onSubmit={formik.handleSubmit} type="white">
      <Typography text="Створити аккаунт" tag="h2" />
      <Button
        onClick={() => login()}
        full={true}
        color="secondary"
        className="flex gap-4"
      >
        <Icon type="GoogleIcon" /> Продовжити з Google
      </Button>
      <span className="text-base bg-white flex justify-center items-center  text-black font-bold relative before:absolute before:w-full before:h-px before:bg-seconderyGray">
        <span className="p-3 inline-block bg-white z-10">Чи</span>
      </span>
      <span className="text-base font-bold text-black">
        Вхід за електроною почтою
      </span>
      <span className="text-sm flex gap-1 text-black font-light">
        У вас ще не має акаунта?
        <Link className="text-sm text-primeryBlue font-bold" to={"/sign-up"}>
          Зареєструватись
        </Link>
      </span>
      <Field
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleChange}
        helperText={formik.errors?.email}
        label={"Email"}
        full
      />
      <Field
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleChange}
        helperText={formik.errors?.password}
        label={"Пароль"}
        full
      />
      <div className="flex gap-4">
        <Button type="button" color="secondary" full>
          Назад
        </Button>
        <Button type="submit" full>
          Увійти
        </Button>
      </div>
    </ComponentForm>
  );
});

export { SignIn };

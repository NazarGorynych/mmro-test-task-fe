import { Typography, Button, Icon, Field } from "@components/index";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Link } from "react-router-dom";

import { ComponentForm } from "../ComponentForm";

const SignUp = () => {
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
    <ComponentForm type="white">
      <Typography text="Створити аккаунт" tag="h2" />
      <Button
        onClick={() => login()}
        full={true}
        color="secondary"
        className="flex gap-4"
      >
        <Icon type="GoogleIcon" /> Створити аккаунт з Google
      </Button>
      <span className="text-base bg-white flex justify-center items-center  text-black font-bold relative before:absolute before:w-full before:h-px before:bg-seconderyGray">
        <span className="p-3 inline-block bg-white z-10">Чи</span>
      </span>
      <span className="text-base font-bold text-black">
        Вхід за електроною почтою
      </span>
      <span className="text-sm flex gap-1 text-black font-light">
        У вас вже є акаунт?
        <Link className="text-sm text-primeryBlue font-bold" to={"/login"}>
          Увійти
        </Link>
      </span>
      <Field label={"Ім'я"} full />
      <Field label={"Фамілія"} full />
      <Field label={"Email"} full />
      <Field label={"Пароль"} full />
      <div className="flex gap-4">
        <Button color="secondary" full>
          Назад
        </Button>
        <Button full>Зареєструватись</Button>
      </div>
    </ComponentForm>
  );
};

export { SignUp };

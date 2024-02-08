import { Typography, Button, Icon } from "@components/index";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { ComponentForm } from "../ComponentForm";

const Authorization = () => {
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
      <Typography text="Вхід" tag="h2" />
      <Button
        onClick={() => login()}
        full={true}
        color="secondary"
        className="flex gap-4"
      >
        <Icon type="GoogleIcon" /> Продовжити з Google
      </Button>
    </ComponentForm>
  );
};

export { Authorization };

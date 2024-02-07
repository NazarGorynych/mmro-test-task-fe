import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    }
  });
  return (
    <></>
    // <GoogleLogin
    //   onError={() => {
    //     console.log("Login Failed");
    //   }}
    // />
  );
};

export { LoginPage };

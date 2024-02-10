import { SignIn } from "@components/index";
import { useDocumentTitle } from "@hooks/index";
import { LayoutWithBg } from "@layout/index";

const SignInPage = () => {
  useDocumentTitle("Sign In | Auction");

  return (
    <LayoutWithBg>
      <SignIn />
    </LayoutWithBg>
  );
};

export { SignInPage };

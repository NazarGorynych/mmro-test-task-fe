import { SignUp } from "@components/index";
import { useDocumentTitle } from "@hooks/index";
import { LayoutWithBg } from "@layout/index";

const SignUpPage = () => {
  useDocumentTitle("Sign Up | Auction");

  return (
    <LayoutWithBg>
      <SignUp />
    </LayoutWithBg>
  );
};

export { SignUpPage };

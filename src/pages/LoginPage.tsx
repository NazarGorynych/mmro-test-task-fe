import { useDocumentTitle } from "@hooks/index";
import { LayoutWithBg } from "@layout/index";

const LoginPage = () => {
  useDocumentTitle("Login | Auction");

  return <LayoutWithBg></LayoutWithBg>;
};

export { LoginPage };

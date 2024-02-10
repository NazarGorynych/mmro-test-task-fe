import { Icon, Button } from "@components/index";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const LayoutWithBg: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Moves one entry back in the history stack
  };
  return (
    <section className="w-full relative overflow-hidden h-full">
      <div className="absolute z-50 top-16 left-24">
        <Button onClick={goBack} color="transparent">
          <Icon type="ArrowLeft" />
        </Button>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/images/background-login.png"}
        alt="background"
        className="absolute h-full bottom-0 top-0 w-full right-0 left-0"
      />
      <div className="relative z-40 py-16">{children}</div>
    </section>
  );
};

export { LayoutWithBg };

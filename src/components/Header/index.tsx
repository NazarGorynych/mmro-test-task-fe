import { Icon, Button, MainLogo } from "@components/index";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <header className="bg-white px-24 flex items-center justify-between sticky top-0 max-h-32 h-full shadow-xl">
      <MainLogo className="fill-black" />
      <div className="flex gap-6">
        <Button onClick={handleClick}>Зарегеструватись</Button>
        <Button color="transparent">
          <Icon type="AccountIcon" />
        </Button>
      </div>
    </header>
  );
};

export { Header };

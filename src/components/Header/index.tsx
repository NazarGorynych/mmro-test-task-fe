import { Icon, Button, MainLogo, DropdownAccount } from "@components/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setOpen((currentValue) => !currentValue);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <header className="bg-white px-24 flex z-[1000] items-center py-10 justify-between sticky top-0 h-32 shadow-xl">
      <MainLogo className="fill-black" />
      <div className="flex gap-6">
        <Button onClick={handleClick}>Зареєструватись</Button>
        <DropdownAccount isOpen={open} onClose={handleClose} balance={0}>
          <Button onClick={handleToggle} color="transparent">
            <Icon type="AccountIcon" />
          </Button>
        </DropdownAccount>
      </div>
    </header>
  );
};

export { Header };

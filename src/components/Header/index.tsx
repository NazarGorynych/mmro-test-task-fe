import {
  Icon,
  Button,
  MainLogo,
  DropdownAccount,
  ModalBalance
} from "@components/index";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();
  const isLogin = true;

  const handleToggleDropdown = () => {
    setOpenDropdown((currentValue) => !currentValue);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    handleCloseDropdown();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <header className="bg-white px-24 flex z-[1000] items-center py-10 justify-between sticky top-0 h-32 shadow-xl">
      <MainLogo className="fill-black" />
      <div className="flex gap-6">
        {isLogin ? (
          <nav className="flex gap-9 items-center">
            <Link
              className="text-black text-lg font-bold flex gap-2 items-center"
              to={"/create-auction"}
            >
              <Icon type={"PlusIcon"} className="stroke-black" />
              Cтворити аукціон
            </Link>
            <Link className="text-black text-lg font-bold" to={"/my-auction"}>
              Мої аукціони
            </Link>
          </nav>
        ) : (
          <Button onClick={handleClick}>Зареєструватись</Button>
        )}
        <DropdownAccount
          isOpen={openDropdown}
          onClose={handleCloseDropdown}
          handleOpenModal={handleOpenModal}
          balance={0}
        >
          <Button onClick={handleToggleDropdown} color="transparent">
            <Icon type="AccountIcon" className=" hover:fill-primeryBlue" />
          </Button>
        </DropdownAccount>
      </div>
      <ModalBalance open={openModal} onClose={handleCloseModal} />
    </header>
  );
};

export { Header };

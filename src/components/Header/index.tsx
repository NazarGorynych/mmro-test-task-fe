import {
  Icon,
  Button,
  MainLogo,
  DropdownAccount,
  ModalBalance
} from "@components/index";
import { useStores } from "@hooks/index";
import cx from "clsx";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Header = observer(() => {
  const {
    auth: { user, logout }
  } = useStores();
  const [openModal, setOpenModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();
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
    navigate("/sign-up");
  };

  return (
    <header className="bg-white px-24 flex z-[1000] items-center py-10 justify-between sticky top-0 h-32 shadow-xl">
      <MainLogo className="fill-black" />
      <div className="flex gap-6">
        {user ? (
          <nav className="flex gap-9 items-center">
            <NavLink
              className={({ isActive }) =>
                cx("text-black text-lg font-bold flex gap-2 items-center", {
                  "text-primeryBlue": isActive
                })
              }
              to={"/create-auction"}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    type={"PlusIcon"}
                    className={cx("stroke-black", {
                      "stroke-primeryBlue": isActive
                    })}
                  />
                  Cтворити аукціон
                </>
              )}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                cx("text-black text-lg font-bold", {
                  "text-primeryBlue": isActive
                })
              }
              to={"/my-auction"}
            >
              Мої аукціони
            </NavLink>
          </nav>
        ) : (
          <Button onClick={handleClick}>Зареєструватись</Button>
        )}
        <DropdownAccount
          isOpen={openDropdown}
          onClose={handleCloseDropdown}
          handleOpenModal={handleOpenModal}
          user={user}
          logout={logout}
        >
          {user && (
            <Button onClick={handleToggleDropdown} color="transparent">
              <Icon type="AccountIcon" className="hover:fill-primeryBlue" />
            </Button>
          )}
        </DropdownAccount>
      </div>
      <ModalBalance open={openModal} onClose={handleCloseModal} />
    </header>
  );
});

export { Header };

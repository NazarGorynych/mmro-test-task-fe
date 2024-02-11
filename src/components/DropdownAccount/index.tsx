import { Icon } from "@components/index";
import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { DropdownAccountProps } from "./index.typs";

const DropdownAccount: FC<DropdownAccountProps> = ({
  user,
  isOpen,
  children,
  handleOpenModal,
  onClose,
  logout
}) => {
  const navigate = useNavigate();
  const handleClickWrapper = (event: MouseEvent<HTMLDivElement>) => {
    const element = (event.target as HTMLElement).closest("#dropdown");
    if (!element) {
      onClose();
    }
  };
  const handleLogout = () => {
    logout();
    onClose();
    navigate("/");
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 bg-transparent"
          onClick={handleClickWrapper}
        />
      )}
      <div id={"dropdown"} className="relative">
        {children}
        {isOpen && (
          <ul className="bg-white shadow-xl absolute py-3 px-2.5 rounded-2xl top-full min-w-56 right-0">
            <li className=" group px-7 py-1.5 rounded-lg hover:bg-black hover:bg-opacity-5 h-14 flex justify-center items-center">
              <button onClick={handleOpenModal} className="w-full flex gap-1">
                <Icon
                  type="WaletIcon"
                  className="group-hover:fill-primeryBlue"
                />
                <span className="flex flex-col items-start">
                  <span className="text-sm font-light text-black">Баланс</span>
                  <span className="text-primeryBlue text-lg font-bold">
                    {user?.wallet_amount} UAH
                  </span>
                </span>
              </button>
            </li>
            <li className="px-7 py-1.5 rounded-lg hover:bg-black hover:bg-opacity-5 h-14 flex justify-center items-center">
              <button
                onClick={handleLogout}
                className="w-full text-base font-bold text-black"
              >
                Вихід
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export { DropdownAccount };

import { Icon } from "@components/index";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { MainLogoProps } from "./index.types";

const MainLogo: FC<MainLogoProps> = ({ className }) => {
  return (
    <NavLink to="/">
      <Icon type="Logo" className={className} />
    </NavLink>
  );
};

export { MainLogo };

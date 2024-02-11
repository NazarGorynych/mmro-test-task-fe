import { InfoUser } from "@utils/types";
import { PropsWithChildren } from "react";

export type DropdownAccountProps = {
  user: InfoUser | null;
  isOpen: boolean;
  onClose: () => void;
  handleOpenModal: () => void;
  logout: () => void;
} & PropsWithChildren;

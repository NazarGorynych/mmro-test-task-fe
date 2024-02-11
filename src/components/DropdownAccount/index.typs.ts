import { PropsWithChildren } from "react";

export type DropdownAccountProps = {
  isOpen: boolean;
  onClose: () => void;
  handleOpenModal: () => void;
  logout: () => void;
  balance: string;
  reservedBalance: string;
} & PropsWithChildren;

import { PropsWithChildren } from "react";

export type DropdownAccountProps = {
  balance?: number;
  isOpen: boolean;
  onClose: () => void;
  handleOpenModal: () => void;
} & PropsWithChildren;

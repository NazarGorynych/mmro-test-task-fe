export type ModalBalanceProps = {
  open: boolean;
  onClose: () => void;
};

export type ModalBalanceValues = {
  amount: string | null;
  balance: string;
};

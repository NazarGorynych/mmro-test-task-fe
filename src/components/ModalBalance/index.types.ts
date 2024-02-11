export type ModalBalanceProps = {
  open: boolean;
  onClose: () => void;
  replenishBalance: (amount: string) => void;
};

export type ModalBalanceValues = {
  amount: string | null;
  balance: string;
};

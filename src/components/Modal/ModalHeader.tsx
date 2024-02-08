import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface ModalFooterProps extends PropsWithChildren {
  onClose: () => void;
  classes?: any;
  displayName?: string;
}

const ModalHeader: FC<ModalFooterProps> = ({ children, classes, onClose }) => {
  return (
    <div className={classes?.wrapperHeader}>
      <button
        onClick={onClose}
        className={clsx(
          "absolute top-0 right-0 rounded-full hover:bg-white hover:bg-opacity-10 m-1",
          classes?.close
        )}
        aria-label="Close"
      >
        {/* <CloseIcon /> */}
      </button>

      {children}
    </div>
  );
};

export { ModalHeader };

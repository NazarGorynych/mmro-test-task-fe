import { Icon } from "@components/index";
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
          "absolute top-4 right-6 rounded-full hover:bg-seconderyGray hover:bg-opacity-5 p-2",
          classes?.close
        )}
        aria-label="Close"
      >
        <Icon type="CloseIcon" className=" hover:fill-primeryBlue" />
      </button>

      {children}
    </div>
  );
};

export { ModalHeader };

import clsx from "clsx";
import { FC, ReactNode, MouseEvent } from "react";

import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";

interface ModalComponentProps {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  classes?: any;
}

interface ModalComponentType extends ModalComponentProps {
  displayName?: string;
  noClose?: boolean;
}

const ModalComponent: FC<ModalComponentType> = ({
  children,
  classes,
  onClose,
  open,
  noClose
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  if (!open) {
    return null;
  }

  return (
    <div
      onClick={() => (noClose ? undefined : onClose())}
      className={clsx(
        "background-modal fixed inset-0 flex justify-center items-center z-[1000]",
        classes?.wrapper
      )}
    >
      <div
        onClick={handleClick}
        className={clsx(
          "border p-6 rounded-3xl relative bg-white",
          classes?.container
        )}
        role="dialog"
        aria-labelledby="modal"
      >
        {children}
      </div>
    </div>
  );
};

ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});

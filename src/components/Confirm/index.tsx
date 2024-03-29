import { Modal, Typography, Button } from "@components/index";
import { FC } from "react";

import { ConfirmProps } from "./index.types";

const Confirm: FC<ConfirmProps> = ({ open, onClose, isButton, handleYes }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header
        classes={{
          wrapperHeader: "pt-6 pb-6"
        }}
        onClose={onClose}
      >
        <Typography tag="h4" text="Ви точно хочете видалити аукціон?" />
      </Modal.Header>
      {isButton && (
        <Modal.Footer className="flex gap-4">
          <Button full onClick={onClose}>
            Ні
          </Button>
          <Button onClick={handleYes} full color="secondary">
            Так
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export { Confirm };

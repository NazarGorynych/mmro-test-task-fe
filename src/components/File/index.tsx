import { Field, Icon } from "@components/index";
import { FC } from "react";

import { FileProps } from "./index.types";

const File: FC<FileProps> = ({ id, ...props }) => {
  return (
    <Field
      id={id}
      label={
        <div className="flex flex-col justify-center items-center gap-4">
          <Icon type={"PlusIcon"} className="stroke-primeryBlue" />
          <span className="text-base font-bold text-seconderyGray">
            Додати Обкладинку
          </span>
        </div>
      }
      type="file"
      className="hidden"
      classes={{
        label:
          "bg-dotted-line w-64 h-64 flex justify-center items-center bg-cover cursor-pointer"
      }}
      {...props}
    />
  );
};

export { File };

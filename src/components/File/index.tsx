import { Field, Icon } from "@components/index";
import { FC, useEffect, useState } from "react";

import { FileProps } from "./index.types";

const File: FC<FileProps> = ({ id, value, ...props }) => {
  const [preview, setPreview] = useState("");
  useEffect(() => {
    setPreview(value ? URL.createObjectURL(value as any) : "");
  }, [value]);

  return (
    <Field
      id={id}
      label={
        <>
          {preview ? (
            <img
              src={preview}
              className="w-64 h-64 bg-cover rounded-2xl"
              alt="main-image"
            />
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <Icon type={"PlusIcon"} className="stroke-primeryBlue" />
              <span className="text-base font-bold text-seconderyGray">
                Додати Обкладинку
              </span>
            </div>
          )}
        </>
      }
      accept="image/png, image/jpeg"
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

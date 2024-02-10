import { FC } from "react";

import { InitialRateProps } from "./index.types";

const InitialRate: FC<InitialRateProps> = ({ label, rate }) => {
  return (
    <div className="flex justify-start gap-2 flex-col">
      <span className="text-base font-bold text-seconderyGray">{label}</span>
      <span className="text-base text-black font-bold">{rate} грн</span>
    </div>
  );
};

export { InitialRate };

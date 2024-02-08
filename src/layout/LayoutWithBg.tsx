import { FC, PropsWithChildren } from "react";

const LayoutWithBg: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/background-login.png"}
        alt="background"
      />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        {children}
      </div>
    </div>
  );
};

export { LayoutWithBg };

import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  return (
    <main
      className={clsx({
        "w-full max-w-screen-2xl px-24 pb-23 flex-1 box-border m-auto pt-9 flex flex-col items-center":
          location.pathname !== "/login"
      })}
    >
      <Outlet />
    </main>
  );
};

export { Main };

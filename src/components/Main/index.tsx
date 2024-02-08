import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  return (
    <main
      className={clsx("flex-1", {
        "w-full max-w-screen-2xl px-24 pb-23 box-border m-auto pt-9 flex flex-col items-center":
          !["/login", "/card/create"].includes(location.pathname)
      })}
    >
      <Outlet />
    </main>
  );
};

export { Main };

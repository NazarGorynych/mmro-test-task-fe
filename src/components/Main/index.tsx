import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="w-full px-24 pb-23 flex-1 box-border m-auto pt-9 flex flex-col items-center">
      <Outlet />
    </main>
  );
};

export { Main };

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main>
      RootLayout
      <Outlet />
    </main>
  );
};

export { RootLayout };

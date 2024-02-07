import { Footer, Header } from "@components/index";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full max-w-screen-2xl">
      <Header />
      <main className="w-full px-24 pb-23 flex-1 box-border m-auto">
        RootLayout
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { RootLayout };

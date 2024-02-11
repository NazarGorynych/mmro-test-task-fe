import { Footer, Header, Main } from "@components/index";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <Main />
      <Footer />
      <Toaster />
    </div>
  );
};

export { RootLayout };

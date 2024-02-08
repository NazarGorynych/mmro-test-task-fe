import { Footer, Header, Main } from "@components/index";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export { RootLayout };

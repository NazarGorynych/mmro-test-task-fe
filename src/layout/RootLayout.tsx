import { Footer, Header, Main } from "@components/index";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full max-w-screen-2xl">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export { RootLayout };

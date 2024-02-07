import { Icon } from "@components/index";

const Header = () => {
  return (
    <header className="bg-white px-24 flex items-center justify-between sticky top-0 max-h-32 h-full shadow-xl">
      <Icon type="Logo" className="fill-black" />
    </header>
  );
};

export { Header };

import { Icon, Button } from "@components/index";

const Header = () => {
  return (
    <header className="bg-white px-24 flex items-center justify-between sticky top-0 max-h-32 h-full shadow-xl">
      <Icon type="Logo" className="fill-black" />
      <div className="flex gap-6">
        <Button>Зарегеструватись</Button>
        <Button color="transparent">
          <Icon type="AccountIcon" />
        </Button>
      </div>
    </header>
  );
};

export { Header };

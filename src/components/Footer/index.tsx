import { Icon, MainLogo } from "@components/index";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-24 bg-black pt-12 pb-6 w-full flex justify-between">
      <div className="flex flex-col gap-8">
        <MainLogo className="fill-white" />

        <div className="flex justify-between items-center">
          <Link to={"https://www.tiktok.com/"} target="_blank">
            <Icon type="TiktokIcon" />
          </Link>
          <Link to={"https://uk-ua.facebook.com/"} target="_blank">
            <Icon type="FacebookIcon" />
          </Link>
          <Link to={"https://www.instagram.com/"} target="_blank">
            <Icon type="InstagramIcon" />
          </Link>
          <Link to={"https://www.youtube.com/"} target="_blank">
            <Icon type="YoutubeIcon" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <span className="text-lg font-light">FQA</span>
        <a href="mailto:aucion_ukr@gmail.com">aucion_ukr@gmail.com</a>
      </div>
      <span className="text-xs flex gap-1 self-end">
        <Icon type="CopyrightIcon" /> Copyright 2023. Всі права захищені.
      </span>
    </footer>
  );
};

export { Footer };

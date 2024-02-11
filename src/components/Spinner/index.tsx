import MoonLoader from "react-spinners/MoonLoader";

const Spinner = () => {
  return (
    <div className="absolute z-50 flex justify-center items-center top-0 bottom-0 right-0 left-0 background-modal backdrop-blur-sm">
      <MoonLoader color="#000000" size={100} />
    </div>
  );
};

export { Spinner };

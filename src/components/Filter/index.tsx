import { List } from "@components/List";

import { listFilter } from "./index.constants";

const Filter = () => {
  return (
    <List className="flex flex-wrap w-full">
      {listFilter.map((item) => {
        return (
          <List.Item
            className="text-black border-b-2 border-b-[#E6E1E1] p-4 text-2xl font-bold cursor-pointer"
            key={item.id}
            text={item.title}
          />
        );
      })}
    </List>
  );
};

export { Filter };

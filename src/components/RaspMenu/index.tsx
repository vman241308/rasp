import { useNavigate } from "react-router";

import { Menu } from "@/types";

const RaspMenu = (props: Menu) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex rounded h-32 w-32 bg-white cursor-pointer"
      onClick={() => navigate(props.menu.path)}
    >
      <div className="flex flex-col m-auto gap-4">
        <img className="m-auto" src={props.menu.icon} />
        <span>{props.menu.name}</span>
      </div>
    </div>
  );
};

export default RaspMenu;

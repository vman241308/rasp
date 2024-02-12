import React from "react";
import { useNavigate } from "react-router";

export type MenuComponentsProps = {
  menu: {
    icon: any;
    name: string;
    path: string;
  };
};

const RaspMenu = (props: MenuComponentsProps) => {
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

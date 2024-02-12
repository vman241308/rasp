import RaspMenuHeader from "@/components/RaspMenuHeader";
import { Outlet } from "react-router-dom";

const MenuLayout = () => {
  return (
    <>
      <RaspMenuHeader />
      <Outlet />
    </>
  );
};

export default MenuLayout;
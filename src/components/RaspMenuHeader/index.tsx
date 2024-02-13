import { getItemFromArr } from "@/utils/Functions";
import { useLocation, useNavigate } from "react-router-dom";

const RaspMenuHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menus = [
    {
      id: 0,
      label: "Calendar",
      path: "/calendar",
    },
    {
      id: 1,
      label: "Leave",
      path: "/leave",
    },
    {
      id: 2,
      label: "Leave",
      path: "/leave/request/123",
    },
  ];

  const onClickBack = () => {
    switch (pathname) {
      case "/leave/request/123":
        navigate("/leave");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 my-4 mx-8">
        <div
          className="text-base self-center cursor-pointer"
          onClick={onClickBack}
        >
          {"<"} Back
        </div>
        <div className="text-xl text-center w-full">
          {getItemFromArr(menus, "path", pathname)?.label || ""}
        </div>
      </div>
      <hr />
    </>
  );
};

export default RaspMenuHeader;

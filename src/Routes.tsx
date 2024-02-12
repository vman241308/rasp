import MainLayout from "@/layouts";
import MenuLayout from "@/layouts/Menu";

import Error404 from "@/pages/error/404";

import Home from "@/pages/home";
import Calendar from "@/pages/calendar";

const Routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "*", // go to 404 error page when cannot find route
    element: <Error404 />,
  },
];

export default Routes;

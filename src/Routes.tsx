import MainLayout from "@/layouts";
import CalendarLayout from "@/layouts/Calendar";

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
    element: <CalendarLayout />,
    children: [
      {
        path: "/calendarView",
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

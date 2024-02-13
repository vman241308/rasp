import { useEffect, useState } from "react";

import RaspShift from "@/components/RaspShift";
import RaspMenu from "@/components/RaspMenu";

import {
  DAYS_OF_WEEK,
  DEBUG_MODE,
  MONTHS,
} from "@/utils/Constants";

import { isEmpty } from "@/utils/Functions";

import { Shift } from "@/types";

import ShiftService from "@/services/Shifts";
import dayjs from "dayjs";

const menus = [
  {
    icon: "/calendar.png",
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: "/timesheets.png",
    name: "Timesheets",
    path: "/timesheets",
  },
  {
    icon: "/applyforleave.png",
    name: "Apply for Leave",
    path: "/leave",
  },
  {
    icon: "/payslips.png",
    name: "Payslips",
    path: "/payslips",
  },
  {
    icon: "/expenses.png",
    name: "Expenses",
    path: "/expenses",
  },
];

const Home = () => {
  const [upcomingShifts, setUpcomingShifts] = useState<Array<Shift>>();
  const [pastShifts, setPastShifts] = useState<Array<Shift>>();

  useEffect(() => {
    ShiftService.getShiftsDashboard()
      .then((res: any) => {
        let upcomingShifts = res.data.upcomingShifts;
        let pastShifts = res.data.pastShifts;
        let newUpcomingShifts: Array<Shift> = [];
        let newPastShifts: Array<Shift> = [];
        upcomingShifts.map((item: any, index: number) => {
          let startDate = dayjs(item.startDateTime);
          let endDate = dayjs(item.endDateTime);
          newUpcomingShifts.push({
            id: index,
            date: startDate.get("date").toString(),
            month: MONTHS[startDate.get("month")].slice(0, 3),
            name: item.roleName,
            location: item.location,
            duration:
              startDate.format("HH:mm") + " - " + endDate.format("HH:mm"),
            status: item.status,
            startDateTime: item.startDateTime,
            endDateTime: item.endDateTime,
          });
        });
        pastShifts.map((item: any, index: number) => {
          let startDate = dayjs(item.startDateTime);
          let endDate = dayjs(item.endDateTime);
          newPastShifts.push({
            id: index,
            date: startDate.get("date").toString(),
            month: MONTHS[startDate.get("month")].slice(0, 3),
            name: item.roleName,
            location: item.location,
            duration:
              startDate.format("HH:mm") + " - " + endDate.format("HH:mm"),
            status: item.status,
            startDateTime: item.startDateTime,
            endDateTime: item.endDateTime,
          });
        });
        setUpcomingShifts(newUpcomingShifts);
        setPastShifts(newPastShifts);
      })
      .catch((err) => {
        DEBUG_MODE &&
          console.error(
            "Sorry, but an error has been ocurred while fetching shifts!",
            err
          );
      });
  }, []);

  return (
    <>
      <div className="mx-6">
        <div className="mb-4">
          <div className="flex justify-center items-center mb-3">
            <img src="/favicon.png" />
          </div>
          <p className="font-bold text-3xl">Good Evening, James</p>
          <p className="text-base mt-2">
            {DAYS_OF_WEEK[new Date().getDay()]}, {new Date().getDate()}{" "}
            {new Date().toLocaleString("en-US", { month: "long" })}{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <div className="xs:flex px-6 w-full overflow-auto gap-6 ">
        <div className="min-w-[85%]">
          <span className="font-bold text-lg">{"Upcoming shifts"}</span>
          <div className="mt-4">
            {!isEmpty(upcomingShifts) && upcomingShifts !== undefined ? (
              upcomingShifts.map((item, index) => {
                let showDate: boolean = true;
                if (index !== 0) {
                  showDate = !(
                    upcomingShifts[index - 1].date === item.date &&
                    upcomingShifts[index - 1].month === item.month
                  );
                }
                return (
                  <RaspShift shift={item} key={item.id} showDate={showDate} />
                );
              })
            ) : (
              <span className="flex justify-center h-[71px] items-center">
                No shifts to display
              </span>
            )}
          </div>
        </div>
        <div className="min-w-[85%]">
          <span className="font-bold text-lg">{"Past shifts"}</span>
          <div className="mt-4">
            {!isEmpty(pastShifts) && pastShifts !== undefined ? (
              pastShifts.map((item, index) => {
                let showDate: boolean = true;
                if (index !== 0) {
                  showDate = !(
                    pastShifts[index - 1].date === item.date &&
                    pastShifts[index - 1].month === item.month
                  );
                }
                return (
                  <RaspShift shift={item} key={item.id} showDate={showDate} />
                );
              })
            ) : (
              <span className="flex justify-center h-[71px] items-center">
                No shifts to display
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[#F3F8FC] justify-between items-center mt-4 pt-2">
        <div className="grid xs:grid-cols-3 gap-3 p-3 grid-cols-2">
          {menus.map((menu) => (
            <RaspMenu menu={menu} key={menu.name} />
          ))}
        </div>

        <p className="mb-4 font-normal text-xs text-custom-gray ">
          All rights reserved. © 2024 RASP
        </p>
      </div>
    </>
  );
};

export default Home;

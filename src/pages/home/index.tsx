import { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
} from "@material-tailwind/react";

import {
  SHIFT_STATUS_CONFIRMED,
  SHIFT_STATUS_PUBLISHED,
  TAB_HEADER_UPCOMING_SHIFTS,
  TAB_HEADER_PAST_SHIFTS,
  DAYS_OF_WEEK,
} from "@/utils/Constants";

import RaspShift from "@/components/RaspShift";
import RaspMenu from "@/components/RaspMenu";
import { isEmpty } from "@/utils/Functions";

type shiftModel = {
  id: number;
  date: string;
  month: string;
  name: string;
  description: string;
  duration: string;
  status: number;
};

const menus = [
  {
    icon: "/calendar.png",
    name: "Calendar",
    path: "/calendarview",
  },
  {
    icon: "/timesheets.png",
    name: "Timesheets",
    path: "/timesheets",
  },
  {
    icon: "/applyforleave.png",
    name: "Apply for Leave",
    path: "/applyforleave",
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

const tabHeaders = [
  {
    label: "Upcoming Shifts",
    value: TAB_HEADER_UPCOMING_SHIFTS,
  },
  {
    label: "Past Shifts",
    value: TAB_HEADER_PAST_SHIFTS,
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(TAB_HEADER_UPCOMING_SHIFTS);
  const [shifts, setShifts] = useState<Array<shiftModel>>();

  useEffect(() => {
    if (activeTab === TAB_HEADER_UPCOMING_SHIFTS) {
      setShifts([
        {
          id: 1,
          date: "10",
          month: "Feb",
          name: "Reefer Care",
          description: "Thames 1",
          duration: "00:00 - 07:00",
          status: SHIFT_STATUS_CONFIRMED,
        },
        {
          id: 2,
          date: "11",
          month: "Feb",
          name: "Reefer Care",
          description: "Thames 1",
          duration: "00:00 - 07:00",
          status: SHIFT_STATUS_PUBLISHED,
        },
        {
          id: 3,
          date: "12",
          month: "Feb",
          name: "Reefer Care",
          description: "Thames 1",
          duration: "00:00 - 07:00",
          status: SHIFT_STATUS_PUBLISHED,
        },
      ]);
    } else {
      setShifts([]);
    }
  }, [activeTab]);

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

        <div>
          <Tabs value={activeTab}>
            <TabsHeader
              className=""
              indicatorProps={{
                className: "bg-custom-blue ",
              }}
              placeholder="Shift tab header"
            >
              {tabHeaders.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={`${activeTab === value ? "text-white" : "text-custom-gray"
                    } `}
                  onClick={() => setActiveTab(value)}
                  placeholder={`${label + " tab"}`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody placeholder="Shift tab body">
              {!isEmpty(shifts) ? (
                shifts.map((item, index) => {
                  let showDate: boolean = true;
                  if (index !== 0) {
                    showDate = !(
                      shifts[index - 1].date === item.date &&
                      shifts[index - 1].month === item.month
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
            </TabsBody>
          </Tabs>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[#F3F8FC] justify-between items-center mt-4 pt-2">
        <div className="grid grid-cols-3 gap-3 p-3">
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

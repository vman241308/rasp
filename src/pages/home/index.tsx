import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import RaspShift from '@/components/RaspShift';
import RaspMenu from '@/components/RaspMenu';

const upcoming_shifts = [
  {
    id: 1,
    day: "9",
    month: "Feb",
    name: "Reefer Care",
    description: "Thames 1",
    duration: "00:00 - 07:00",
    status: 0
  },
  {
    id: 2,
    day: "10",
    month: "Feb",
    name: "Reefer Care",
    description: "Thames 1",
    duration: "00:00 - 07:00",
    status: 1
  },
  {
    id: 3,
    day: "11",
    month: "Feb",
    name: "Reefer Care",
    description: "Thames 1",
    duration: "00:00 - 07:00",
    status: 1
  }
]

const menus = [
  {
    icon: "/calendar.png",
    name: "Calendar"
  },
  {
    icon: "/timesheets.png",
    name: "Timesheets"
  },
  {
    icon: "/applyforleave.png",
    name: "Apply for Leave"
  },
  {
    icon: "/payslips.png",
    name: "Payslips"
  },
  {
    icon: "/expenses.png",
    name: "Expenses"
  }
]

const Home = () => {
  const data = [
    {
      label: "Upcoming Shifts",
      value: "upcoming_shifts",
    },
    {
      label: "Past Shifts",
      value: "past_shifts",
    },
  ];

  return (
    <>
      <div className="gap-3 mx-6 ">
        <div className="mb-4">
          <div className="h-14 flex items-center justify-center mb-3"><img src="/favicon.png" /></div>
          <p className="font-medium text-3xl font-sans">Good Evening, James</p>
          <p className="text-base font-normal font-sans">Thursday, 8 February 2024</p>
        </div>

        <div>
          <Tabs value="upcoming_shifts">
            <TabsHeader className=" bg-custom-gray"
              indicatorProps={{
                className: "bg-custom-blue",
              }}>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className=" text-white">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>

        {
          upcoming_shifts.map((upcoming_shift) => (
            <RaspShift shift={upcoming_shift} key={upcoming_shift.id} />
          ))
        }
      </div>

      <div className="flex flex-col bg-[#F3F8FC] justify-between mt-3">
        <div className=" grid grid-cols-3 gap-3 p-3 mb-[133px]">
          {
            menus.map((menu) => (
              <RaspMenu menu={menu} key={menu.name} />
            ))
          }
        </div>

        <p className=" font-normal text-xs font-sans m-auto ">All rights reserved. © 2024 RASP</p>
      </div>
    </>
  );
};

export default Home;

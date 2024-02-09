import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import RaspShift from '@/components/RaspShift';
import RaspMenu from '@/components/RaspMenu';

const upcoming_shifts = [
  {
    day: "9",
    month: "Feb",
    name: "Reefer Care",
    description: "Thames 1",
    duration: "00:00 - 07:00",
    status: 0
  },
  {
    day: "10",
    month: "Feb",
    name: "Reefer Care",
    description: "Thames 1",
    duration: "00:00 - 07:00",
    status: 1
  },
  {
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
    icon: "",
    name: "Calendar"
  },
  {
    icon: "",
    name: "Timesheets"
  },
  {
    icon: "",
    name: "Apply for Leave"
  },
  {
    icon: "",
    name: "Payslips"
  },
  {
    icon: "",
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
    <div className="gap-3 mx-6">
      <div>
        <div className="h-14 flex items-center justify-center"><img src="/favicon.png" /></div>
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
          <RaspShift shift={upcoming_shift} />
        ))
      }

      {
        menus.map((menu) => (
          <RaspMenu menu={menu} />
        ))
      }
    </div>
  );
};

export default Home;

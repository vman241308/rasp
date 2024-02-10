import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { isEmpty } from "@/utils/Functions";
import RaspShift from "@/components/RaspShift";
import {
  SHIFT_STATUS_CONFIRMED,
  SHIFT_STATUS_PUBLISHED,
} from "@/utils/Constants";

const Calendar = () => {
  const navigate = useNavigate();

  type shiftModel = {
    id: number;
    date: string;
    month: string;
    name: string;
    description: string;
    duration: string;
    status: number;
  };

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [shifts, setShifts] = useState<Array<shiftModel>>();
  const [allShow, setAllShow] = useState<boolean>(true);

  useEffect(() => {
    switch (selectedDate?.$D) {
      case 10:
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
            date: "10",
            month: "Feb",
            name: "Reefer Care",
            description: "Thames 1",
            duration: "08:00 - 10:00",
            status: SHIFT_STATUS_CONFIRMED,
          },
        ]);
        break;
      case 11:
        setShifts([
          {
            id: 3,
            date: "11",
            month: "Feb",
            name: "Reefer Care",
            description: "Thames 1",
            duration: "00:00 - 07:00",
            status: SHIFT_STATUS_PUBLISHED,
          },
        ]);
        break;
      case 12:
        setShifts([
          {
            id: 4,
            date: "12",
            month: "Feb",
            name: "Reefer Care",
            description: "Thames 1",
            duration: "00:00 - 07:00",
            status: SHIFT_STATUS_PUBLISHED,
          },
        ]);
        break;
      default:
        if (allShow)
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
              date: "10",
              month: "Feb",
              name: "Reefer Care",
              description: "Thames 1",
              duration: "08:00 - 10:00",
              status: SHIFT_STATUS_CONFIRMED,
            },
            {
              id: 3,
              date: "11",
              month: "Feb",
              name: "Reefer Care",
              description: "Thames 1",
              duration: "00:00 - 07:00",
              status: SHIFT_STATUS_PUBLISHED,
            },
            {
              id: 4,
              date: "12",
              month: "Feb",
              name: "Reefer Care",
              description: "Thames 1",
              duration: "00:00 - 07:00",
              status: SHIFT_STATUS_PUBLISHED,
            },
          ]);
        else setShifts([]);
    }
  }, [selectedDate]);

  const onChangeDate = (newValue: Dayjs) => {
    setSelectedDate(newValue);
    setAllShow(false);
  };

  const onClickToday = () => {
    setSelectedDate(dayjs());
    setAllShow(false);
  }

  const onClickClear = () => {
    setSelectedDate(dayjs());
    setAllShow(true);
  }

  useEffect(() => {
    if (allShow) {
      document.querySelector(".Mui-selected")?.classList.remove("Mui-selected");
    }
  },[allShow])

  return (
    <>
      <div>
        <div className="grid grid-cols-3 my-4 mx-8">
          <div className="text-base self-center cursor-pointer" onClick={() => navigate("/")}>
            {"<"} Back
          </div>
          <div className="text-xl text-center w-full">Calendar</div>
          <div></div>
        </div>
        <hr />
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate}
              onChange={onChangeDate}
              views={["year", "month", "day"]}
              fixedWeekNumber={6}
              showDaysOutsideCurrentMonth
            />
            <div className="flex float-end gap-4 mr-24">
              <span className="cursor-pointer" onClick={onClickClear}>Clear</span>
              <span className="text-custom-blue cursor-pointer" onClick={onClickToday}>
                Today
              </span>
            </div>
          </LocalizationProvider>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-[#F3F8FC] items-center mt-4 pt-2">
        {!isEmpty(shifts) ? (
          shifts.map((item, index) => {
            let showDate: boolean = true;
            if (index !== 0) {
              showDate = !(
                shifts[index - 1].date === item.date &&
                shifts[index - 1].month === item.month
              );
            }
            return <RaspShift shift={item} key={item.id} showDate={showDate} />;
          })
        ) : (
          <span className="flex justify-center h-[71px] items-center">
            No shifts to display
          </span>
        )}
      </div>
    </>
  );
};

export default Calendar;

import { useEffect, useRef, useState } from "react";

import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { isEmpty } from "@/utils/Functions";
import RaspShift from "@/components/RaspShift";
import { DEBUG_MODE, MONTHS } from "@/utils/Constants";

import { Shift } from "@/types";
import ShiftService from "@/services/Shifts";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [shifts, setShifts] = useState<Array<Shift>>();
  const [allShow, setAllShow] = useState<boolean>(true);

  const clickedToday = useRef(false);

  const getShifts = (month: string, allShow: boolean) => {
    ShiftService.getShiftsCalendar(month)
      .then((res: any) => {
        let newShifts: Array<Shift> = [];
        res.data.map((item: any, index: number) => {
          let startDate = dayjs(item.startDateTime);
          let endDate = dayjs(item.endDateTime);
          if (
            allShow ||
            (!allShow &&
              selectedDate
                .add(-1, "second")
                .isBefore(dayjs(item.startDateTime)) &&
              selectedDate
                .add(1, "day")
                .add(1, "second")
                .isAfter(dayjs(item.endDateTime)))
          ) {
            newShifts.push({
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
          }
        });
        setShifts(newShifts);
      })
      .catch((err) => {
        DEBUG_MODE &&
          console.error(
            "Sorry, but an error has been ocurred while fetching shifts!",
            err
          );
      });
  };

  const onChangeDate = (newValue: Dayjs) => {
    if (clickedToday.current) return;
    setSelectedDate(newValue.set("hour", 0).set("minute", 0).set("second", 0));
    setAllShow(false);
  };

  const onChangeMonth = (newValue: Dayjs) => {
    if (clickedToday.current) return;
    setSelectedDate(newValue);
    setAllShow(true);
  };

  const onClickToday = () => {
    setAllShow(false);
    clickedToday.current = true;
    setSelectedDate(dayjs().set("hour", 0).set("minute", 0).set("second", 0));
  };

  const onClickClear = () => {
    setAllShow(true);
  };

  useEffect(() => {
    getShifts(selectedDate.format("YYYY-MM"), allShow);
    clickedToday.current = false;
  }, [allShow, selectedDate]);

  return (
    <>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            onChange={onChangeDate}
            onMonthChange={onChangeMonth}
            onYearChange={onChangeMonth}
            views={["year", "month", "day"]}
            fixedWeekNumber={6}
            showDaysOutsideCurrentMonth
          />
          <div className="flex float-end gap-4 mr-24">
            <span className="cursor-pointer" onClick={onClickClear}>
              Clear
            </span>
            <span
              className="text-custom-blue cursor-pointer"
              onClick={onClickToday}
            >
              Today
            </span>
          </div>
        </LocalizationProvider>
      </div>
      <div className="flex-1 flex flex-col bg-[#F3F8FC] items-center mt-4 pt-2 px-8">
        {!isEmpty(shifts) && shifts !== undefined ? (
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

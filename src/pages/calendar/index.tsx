import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    console.log("dayjs>>>>>", selectedDate);
  }, [selectedDate]);

  return (
    <div className="my-2 max-w-[440px] mx-auto">
      <div className="flex my-4">
        <span className="text-base self-center">{"<"} Back</span>
        <span className="text-xl w-auto">Calendar</span>
      </div>
      <hr />
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={(newValue) => setSelectedDate(newValue)}
            views={["year", "month", "day"]}
            fixedWeekNumber={5}
            showDaysOutsideCurrentMonth
          />
          <div className="flex float-end gap-4">
            <span>Clear</span>
            <span className="text-custom-blue">Today</span>
          </div>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Calendar;

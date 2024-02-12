import { DEBUG_MODE} from "@/utils/Constants";
import http from "@/utils/Http";

const _API = ""; // prefix url for schedule api

// get the shifts for dashboard
const getShiftsDashboard = () => {
  return new Promise((resolve, reject) => {
    http
      .get(_API + "/dashboard") // method: GET
      .then((response) => {
        // if api call has been succeeded
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        // if it has error from server.
        if (!DEBUG_MODE) console.clear(); // clear the console log in prod mode
        reject(error.response);
      });
  });
};

// get the shifts for Calendar
const getShiftsCalendar = (month: string) => {
  return new Promise((resolve, reject) => {
    http
      .get(_API + "/calendar?range=" + month) // method: GET
      .then((response) => {
        // if api call has been succeeded
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        // if it has error from server.
        if (!DEBUG_MODE) console.clear(); // clear the console log in prod mode
        reject(error.response);
      });
  });
};

const ShiftService = {
  getShiftsDashboard,
  getShiftsCalendar,
};

export default ShiftService;

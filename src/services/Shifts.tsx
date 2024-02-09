import { DEBUG_MODE} from "@/utils/Constants";
import http from "@/utils/Http";

const _API = ""; // prefix url for schedule api

// get the shifts
const getShifts = () => {
  return new Promise((resolve, reject) => {
    http
      .get(_API + ``) // method: GET
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
  getShifts,
};

export default ShiftService;

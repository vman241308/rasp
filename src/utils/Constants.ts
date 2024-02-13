import { stringToBool } from "@/utils/Functions";

// import env
export const DEBUG_MODE = stringToBool(import.meta.env.VITE_DEBUG_MODE);

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const LEAVE_STATUS = {
  PENDING: 0,
  APPROVED: 1,
  DECLINED: 2,
};

export const LEAVE_ACTIVE_STATUS = {
  ACTIVE: 0,
  ARCHIVED: 1,
};

// days of week
export const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// months
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

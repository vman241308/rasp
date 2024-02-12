import { stringToBool } from "@/utils/Functions";

// import env
export const DEBUG_MODE = stringToBool(import.meta.env.VITE_DEBUG_MODE);

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// shift status
export const SHIFT_STATUS_PUBLISHED = 0;

export const SHIFT_STATUS_CONFIRMED = 1;

export const LEAVE_STATUS = {
  PENDING: 0,
  APPROVED: 1,
  DECLINED: 2,
};

export const LEAVE_ACTIVE_STATUS = {
  ACTIVE: 0,
  ARCHIVED: 1,
};

// tab headers on home page
export const TAB_HEADER_UPCOMING_SHIFTS = "upcoming_shifts";

export const TAB_HEADER_PAST_SHIFTS = "past_shifts";

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

export type Menu = {
  menu: {
    icon: any;
    name: string;
    path: string;
  };
};

export type Shift = {
  id: number;
  date: string;
  month: string;
  name: string;
  location: string;
  duration: string;
  status: string;
};

export type ShiftWithShowDate = {
  shift: Shift;
  showDate: boolean;
};

export type LeaveRequestItem = {
  id: number;
  hours: number;
  duration: string;
  description: string;
  status: number;
  activeStatus: number;
};

export type LeaveType = {
  id: number;
  label: string;
  description: string;
};

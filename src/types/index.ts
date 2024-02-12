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
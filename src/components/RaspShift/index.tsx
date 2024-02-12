import React from "react";

export type ShiftComponentsProps = {
  shift: {
    id: number;
    date: string;
    month: string;
    name: string;
    description: string;
    duration: string;
    status: number;
  };
  showDate: boolean;
};

const RaspShift = (props: ShiftComponentsProps) => {
  return (
    <div className="flex px-8 py-4 border-b w-full">
      <div
        className={`flex flex-col justify-between w-7 basis-1/6 ${
          props.showDate ? "" : "invisible"
        }`}
      >
        <p className="text-lg font-bold">{props.shift.date}</p>
        <p className="text-sm">{props.shift.month}</p>
      </div>

      <div className="flex flex-col justify-between w-24 basis-1/2">
        <p className="text-base">{props.shift.name}</p>
        <p className="text-xs text-custom-gray">{props.shift.description}</p>
      </div>

      <div className="flex flex-col justify-between w-24 basis-1/3 items-end">
        <p className="text-sm p-1 text-custom-blue bg-[#F3F8FC] rounded">
          {props.shift.duration}
        </p>
        <p className="text-xs text-custom-gray">
          {props.shift.status === 0 ? "Confirmed" : "Published"}
        </p>
      </div>
    </div>
  );
};

export default RaspShift;

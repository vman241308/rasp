import { ShiftWithShowDate } from "@/types";

const RaspShift: React.FC<ShiftWithShowDate> = (props) => {
  return (
    <>
      <div className="flex w-full">
        <div
          className={`flex flex-col basis-1/6 ${
            props.showDate ? "" : "invisible"
          }`}
        >
          <p className="text-lg font-bold">{props.shift.date}</p>
          <p className="text-sm">{props.shift.month}</p>
        </div>

        <div className="flex flex-col basis-1/2">
          <p className="text-base">{props.shift.name}</p>
          <p className="text-xs text-custom-gray">{props.shift.location}</p>
        </div>

        <div className="flex flex-col basis-1/3 items-end">
          <p className="text-sm p-1 text-custom-blue bg-[#F3F8FC] rounded">
            {props.shift.duration}
          </p>
          <p className="text-xs text-custom-gray">{props.shift.status}</p>
        </div>
      </div>
      <hr className="text-custom-gray/10 my-4"/>
    </>
  );
};

export default RaspShift;

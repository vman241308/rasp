import { useState, useEffect } from "react";
import { LEAVE_STATUS, LEAVE_ACTIVE_STATUS } from "@/utils/Constants";
import { LeaveRequestItem } from "@/types";

const RaspLeave = (props: LeaveRequestItem) => {
  const [leaveStatusLavel, setLeaveStatusLavel] = useState<String>("");

  useEffect(() => {
    switch (props.leave.status) {
      case LEAVE_STATUS.PENDING:
        setLeaveStatusLavel("Pending");
        break;
      case LEAVE_STATUS.APPROVED:
        setLeaveStatusLavel("Approved");
        break;
      default:
        setLeaveStatusLavel("Declined");
        break;
    }
  });
  return (
    <div className="flex px-8 py-4 border-b w-full">
      <div className="flex flex-col justify-between w-7 basis-1/6">
        <p className="text-lg font-bold">{props.leave.hours}</p>
        <p className="text-sm">Hours</p>
      </div>

      <div className="flex flex-col justify-between w-24 basis-1/2">
        <p className="text-base">{props.leave.duration}</p>
        <p className="text-xs text-custom-gray">{props.leave.description}</p>
      </div>

      <div className="flex flex-col justify-center w-24 basis-1/3 items-end">
        <p
          className={`text-sm p-1 text-custom-gray ${
            props.leave.activeStatus === LEAVE_ACTIVE_STATUS.ACTIVE &&
            props.leave.status === LEAVE_STATUS.APPROVED
              ? "text-custom-success-pressed"
              : "text-custom-gray"
          } ${
            props.leave.activeStatus === LEAVE_ACTIVE_STATUS.ACTIVE &&
            props.leave.status === LEAVE_STATUS.APPROVED
              ? "bg-custom-success-pressed/15"
              : "bg-custom-gray/15"
          } rounded`}
        >
          {leaveStatusLavel}
        </p>
      </div>
    </div>
  );
};

export default RaspLeave;

import React, { useState, useEffect } from "react";
import {
    LEAVE_STATUS
} from "@/utils/Constants";

export type LeaveComponentsProps = {
    leave: {
        id: number;
        hours: number;
        duration: string;
        description: string;
        status: number;
    };
};

const LeaveShift: React.FC<LeaveComponentsProps> = (props) => {
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
                setLeaveStatusLavel("Declined")
                break;
        }
    })
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
                <p className="text-sm p-1 text-custom-blue bg-[#F3F8FC] rounded">
                    {leaveStatusLavel}
                </p>
            </div>
        </div>
    );
};

export default LeaveShift;

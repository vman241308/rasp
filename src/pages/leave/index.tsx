import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { isEmpty } from "@/utils/Functions";
import RaspLeave from "@/components/RaspLeave";
import { Button } from "@material-tailwind/react";
import {
    LEAVE_STATUS
} from "@/utils/Constants";

const Leave = () => {
    const navigate = useNavigate();

    type shiftModel = {
        id: number;
        hours: number;
        duration: string;
        description: string;
        status: number;
    };

    const [shiftRequestItems, setShiftRequestItems] = useState<Array<shiftModel>>();

    useEffect(() => {
        setShiftRequestItems([
            {
                id: 1,
                hours: 25,
                duration: "14 Feb - 16 Feb",
                description: "Annual Leave",
                status: LEAVE_STATUS.PENDING,
            },
            {
                id: 2,
                hours: 25,
                duration: "14 Feb - 16 Feb",
                description: "Annual Leave",
                status: LEAVE_STATUS.APPROVED,
            }
        ]);
    }, []);

    return (
        <>
            <div>
                <div className="grid grid-cols-3 my-4 mx-8">
                    <div className="text-base self-center cursor-pointer" onClick={() => navigate("/")}>
                        {"<"} Back
                    </div>
                    <div className="text-xl text-center w-full">Leave</div>
                </div>
                <hr />

                <div className="flex-1 flex flex-col mt-4 pt-2">
                    <p className=" text-lg font-bold px-8">Active Requests</p>
                    {!isEmpty(shiftRequestItems) ? (
                        shiftRequestItems.map((item, index) => {
                            return <RaspLeave leave={item} key={item.id} />;
                        })
                    ) : (
                        <span className="flex justify-center h-[71px] items-center">
                            No leaves to display
                        </span>
                    )}
                </div>

                <div className="flex w-full">
                    <Button color="blue">+ Apply for Leave</Button>
                </div>
            </div>
            <div className="flex-1 flex flex-col bg-[#F3F8FC] mt-4 pt-2">
                <p className=" text-base font-medium px-8">Archived Requests</p>
                {!isEmpty(shiftRequestItems) ? (
                    shiftRequestItems.map((item, index) => {
                        return <RaspLeave leave={item} key={item.id} />;
                    })
                ) : (
                    <span className="flex justify-center h-[71px] items-center">
                        No leaves to display
                    </span>
                )}
            </div>
        </>
    );
};

export default Leave;

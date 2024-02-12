import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { isEmpty } from "@/utils/Functions";
import RaspLeave from "@/components/RaspLeave";
import RaspApplyLeaveModal from "@/components/RaspApplyLeaveModal";
import { Button } from "@material-tailwind/react";

import { LEAVE_STATUS, LEAVE_ACTIVE_STATUS } from "@/utils/Constants";

type leaveModel = {
  id: number;
  hours: number;
  duration: string;
  description: string;
  status: number;
  activeStatus: number;
};

const Leave = () => {
  const navigate = useNavigate();
  const [isOpenApplyLeaveModal, setIsOpenApplyLeaveModal] =
    useState<boolean>(false);

  const [leaveRequestItems, setLeaveRequestItems] =
    useState<Array<leaveModel>>();

  useEffect(() => {
    setLeaveRequestItems([
      {
        id: 1,
        hours: 25,
        duration: "14 Feb - 16 Feb",
        description: "Annual Leave",
        status: LEAVE_STATUS.PENDING,
        activeStatus: LEAVE_ACTIVE_STATUS.ACTIVE,
      },
      {
        id: 2,
        hours: 25,
        duration: "14 Feb - 16 Feb",
        description: "Annual Leave",
        status: LEAVE_STATUS.APPROVED,
        activeStatus: LEAVE_ACTIVE_STATUS.ACTIVE,
      },
      {
        id: 3,
        hours: 25,
        duration: "14 Feb - 16 Feb",
        description: "Annual Leave",
        status: LEAVE_STATUS.APPROVED,
        activeStatus: LEAVE_ACTIVE_STATUS.ARCHIVED,
      },
      {
        id: 4,
        hours: 25,
        duration: "14 Feb - 16 Feb",
        description: "Annual Leave",
        status: LEAVE_STATUS.DECLINED,
        activeStatus: LEAVE_ACTIVE_STATUS.ARCHIVED,
      },
      {
        id: 5,
        hours: 25,
        duration: "14 Feb - 16 Feb",
        description: "Annual Leave",
        status: LEAVE_STATUS.DECLINED,
        activeStatus: LEAVE_ACTIVE_STATUS.ARCHIVED,
      },
    ]);
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 my-4 mx-8">
        <div
          className="text-base self-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          {"<"} Back
        </div>
        <div className="text-xl text-center w-full">Leave</div>
      </div>
      <hr />

      <div className="flex flex-col mt-4 pt-2">
        <p className=" text-lg font-bold px-8">Active Requests</p>
        {!isEmpty(leaveRequestItems) ? (
          leaveRequestItems.map((item, index) => {
            if (item.activeStatus === LEAVE_ACTIVE_STATUS.ACTIVE) {
              console.log(item, "~~~~~~~~~~~~~~~~");
              return (
                <RaspLeave
                  leave={item}
                  key={item.id}
                  leaveActiveStatus={item.activeStatus}
                />
              );
            }
          })
        ) : (
          <span className="flex justify-center h-[71px] items-center">
            No leaves to display
          </span>
        )}
      </div>

      <div className="flex w-full justify-center px-8 py-4">
        <Button
          color="blue"
          className="w-full"
          onClick={() => setIsOpenApplyLeaveModal(true)}
        >
          + Apply for Leave
        </Button>
      </div>
      <div className="flex-1 flex flex-col bg-[#F3F8FC] mt-2 pt-2">
        <p className=" text-base font-medium px-8 mt-4">Archived Requests</p>
        {!isEmpty(leaveRequestItems) ? (
          leaveRequestItems.map((item, index) => {
            if (item.activeStatus === LEAVE_ACTIVE_STATUS.ARCHIVED) {
              return (
                <RaspLeave
                  leave={item}
                  key={item.id}
                  leaveActiveStatus={item.activeStatus}
                />
              );
            }
          })
        ) : (
          <span className="flex justify-center h-[71px] items-center">
            No leaves to display
          </span>
        )}
      </div>

      <RaspApplyLeaveModal
        isOpen={isOpenApplyLeaveModal}
        setIsOpenApplyLeaveModal={setIsOpenApplyLeaveModal}
      />
    </>
  );
};

export default Leave;

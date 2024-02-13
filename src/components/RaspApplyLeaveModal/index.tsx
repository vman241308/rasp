import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Radio, Typography } from "@material-tailwind/react";

import { LeaveType } from "@/types";
import "./styles.css";

Modal.setAppElement("#root");

export type applyLeaveModalProps = {
  isOpen: boolean;
  setIsOpenApplyLeaveModal: (newValue: boolean) => void;
};

const RaspApplyLeaveModal = (props: applyLeaveModalProps) => {
  const [leaveTypeItems, setLeaveTypeItems] = useState<Array<LeaveType>>();

  useEffect(() => {
    setLeaveTypeItems([
      {
        id: 1,
        label: "Annual Leave",
        description: "10 days remaining",
      },
      {
        id: 2,
        label: "Sick Leave",
        description: "10 days remaining",
      },
      {
        id: 3,
        label: "Lieu",
        description: "10 days remaining",
      },
      {
        id: 4,
        label: "RDO",
        description: "10 days remaining",
      },
      {
        id: 5,
        label: "Bereavement Leave",
        description: "",
      },
      {
        id: 6,
        label: "Picnic Day",
        description: "",
      },
      {
        id: 7,
        label: "Jury Duty",
        description: "",
      },
      {
        id: 8,
        label: "Delegate Leave",
        description: "",
      },
      {
        id: 9,
        label: "LWOP",
        description: "",
      },
    ]);
  }, []);

  return (
    <div className="flex w-full">
      <Modal
        isOpen={props.isOpen}
        portalClassName="product-detail"
        closeTimeoutMS={200}
        overlayClassName="overlay"
        className="content"
      >
        <div className="grid grid-cols-3 mt-6 mb-4 mx-5">
          <div
            className="text-base cursor-pointer"
            onClick={() => props.setIsOpenApplyLeaveModal(false)}
          >
            Cancel
          </div>
          <div className="text-xl text-center font-bold w-full">
            Apply Leave
          </div>
        </div>
        <hr />

        <p className=" font-bold text-base px-6 mt-6 mb-2">Type</p>
        <div className="grid grid-cols-2 gap-3 px-5">
          {leaveTypeItems?.map((item) => {
            return (
              <div
                className="flex justify-start border-solid border-2 h-16 w-48 rounded"
                key={item.id}
              >
                <Radio
                  name="description"
                  defaultChecked
                  color="blue"
                  crossOrigin=""
                  label={
                    <div>
                      <Typography
                        color="blue-gray"
                        className="text-sm font-bold"
                        placeholder=""
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                        placeholder=""
                      >
                        {item.description}
                      </Typography>
                    </div>
                  }
                />
              </div>
            );
          })}
        </div>

        <p className=" font-bold text-base px-6 mt-6">Date</p>
      </Modal>
    </div>
  );
};

export default RaspApplyLeaveModal;

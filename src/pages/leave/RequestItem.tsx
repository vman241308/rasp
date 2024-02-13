import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "@/utils/Functions";

const RequestItem = () => {
  const { id } = useParams();

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col px-6 mt-6 mb-2">
        <div className="flex flex-row justify-between ">
          <div>
            <p className="text-sm">Type</p>
            <p className="text-xl">Annual Leave</p>
          </div>

          <div className="flex flex-row">
            <p className="text-5xl font-bold">25</p>{" "}
            <p className="text-sm flex flex-col justify-end">hours</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestItem;

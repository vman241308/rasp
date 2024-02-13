import { useEffect } from "react";

const RequestItem = () => {

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col px-6 mt-6 mb-2">
        <div className="flex flex-row justify-between my-3">
          <div>
            <p className="text-sm">Type</p>
            <p className="text-xl font-bold">Annual Leave</p>
          </div>

          <div className="flex flex-row">
            <p className="text-5xl font-bold">25</p>&nbsp;
            <p className="text-sm flex flex-col justify-end">hours</p>
          </div>
        </div>

        <div className="flex-start flex h-3 w-full overflow-hidden rounded-full bg-custom-gray-light font-sans text-xs font-medium my-4">
          <div className="flex flex-start w-1/2 h-full  bg-custom-blue-light rounded-full">
            <div className="flex w-1/2 h-full  bg-custom-blue rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-row items-center">
            <span className="flex h-3.5 w-3.5 rounded-full bg-custom-blue my-3 mr-3" />
            <p>25 hours this time</p>
          </div>

          <div className="flex flex-row items-center">
            <span className="flex h-3.5 w-3.5 rounded-full bg-custom-blue-light my-3 mr-3" />
            <p>45 hours used before</p>
          </div>

          <div className="flex flex-row items-center">
            <span className="flex h-3.5 w-3.5 rounded-full bg-custom-gray-light my-3 mr-3" />
            <p>80 hours remaining</p>
          </div>
        </div>

        <div className="flex flex-row justify-between bg-custom-gray-extra-light items-center p-6">
          <div className="flex flex-col">
            <p className="text-base font-bold w-full text-center">
              14 Feb, 2024
            </p>
            <p className="text-3xl font-bold w-full text-center">08:30</p>
          </div>

          <p className="text-base font-bold">to</p>

          <div className="flex flex-col">
            <p className="text-base font-bold w-full text-center">
              16 Feb, 2024
            </p>
            <p className="text-3xl font-bold w-full text-center">17:50</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestItem;

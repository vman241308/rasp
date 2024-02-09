
import React from 'react';

export type ShiftComponentsProps = {
    shift: {
        id: number;
        day: string;
        month: string;
        name: string;
        description: string;
        duration: string;
        status: number;
    }
}

const RaspShift: React.FC<ShiftComponentsProps> = (props) => {
    return (
        <div className="flex flex-row p-4 border-solid border-b">
            <div className='flex flex-col justify-between w-7 basis-1/6'>
                <p className="text-lg font-medium font-sans">{props.shift.day}</p>
                <p className="text-sm font-normal font-sans">{props.shift.month}</p>
            </div>

            <div className='flex flex-col justify-between w-24 basis-1/3'>
                <p className="text-base font-normal font-sans">{props.shift.name}</p>
                <p className="text-xs font-normal font-sans">{props.shift.description}</p>
            </div>

            <div className='flex flex-col justify-between w-24 basis-1/2 items-end'>
                <p className="text-base font-normal font-sans text-custom-blue bg-[#F3F8FC] rounded">{props.shift.duration}</p>
                <p className="text-xs font-normal font-sans text-custom-gray">{props.shift.status === 0 ? "Confirmed" : "Published"}</p>
            </div>
        </div>
    );
};

export default RaspShift;
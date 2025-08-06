import Image from 'next/image';
import React from 'react';

const EmployeePerformanceCard = () => {
  return (
    <div className='absolute top-[60px] right-0'>
      <div className="relative bg-white rounded-lg p-4 w-[250px] h-[140px] ">
        <h2 className="text-xs font-semibold text-black">
          Employee Performance
        </h2>

        <div className="flex items-center justify-between">
          <Image
            src={'/gif/EmployeePerformancePercent.gif'}
            alt={'EmployeePerformancePercent'}
            width={90}
            height={50}
          />
          <div className="flex flex-col gap-2">
            <div className="w-32 h-3 bg-gray-200 rounded-full"></div>
            <div className="w-20 h-3 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-[-30px] left-[-20px]">
          <Image
            src={'/gif/EmployeePerformanceLeader.gif'}
            alt={'EmployeePerformanceLeader'}
            width={300}
            height={65}
            className='max-w-[120%]'
          />
        </div>
      </div>
    </div>

  );
};

export default EmployeePerformanceCard;

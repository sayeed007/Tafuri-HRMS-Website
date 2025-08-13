import Image from 'next/image';
import React from 'react';

const EmployeePerformanceCard = () => {
  return (
    <div className='w-[250px] md:absolute md:top-[60px] md:right-0 '>
      <div className="relative bg-white rounded-lg p-4 md:max-w-[250px] h-[140px] ">
        <h2 className="text-xs font-semibold text-black">
          Employee Performance
        </h2>

        <div className="flex items-center justify-between">
          <Image
            src={'/gif/EmployeePerformancePercent.gif'}
            alt={'EmployeePerformancePercent'}
            width={90}
            height={50}
            unoptimized
            className="w-[90px] h-[50px]"
          />
          <div className="flex flex-col gap-2">
            <div className="w-32 h-3 bg-gray-200 rounded-full"></div>
            <div className="w-20 h-3 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-[-20px]">
          <Image
            src={'/gif/EmployeePerformanceLeader.gif'}
            alt={'EmployeePerformanceLeader'}
            width={300}
            height={65}
            className='max-w-[120%] w-[300px] h-[65px]'
            unoptimized
          />
        </div>
      </div>
    </div>

  );
};

export default EmployeePerformanceCard;

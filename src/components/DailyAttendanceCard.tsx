import Image from "next/image";


const DailyAttendanceCard = () => {
  return (
    <div className="absolute top-[85px] left-[50px] bg-white rounded-lg p-4 w-full max-w-[200px] shadow-elevation-5 z-10">
      <h2 className="text-xs font-semibold text-black text-center">
        Daily Attendance
      </h2>

      <div className="flex items-center justify-center">
        <Image
          src={'/gif/DailyAttendance.gif'}
          alt={'CoreHRPoint'}
          width={150}
          height={150}
        />
      </div>

      <div className="flex flex-wrap gap-1">
        <div className="flex w-[48%] items-center gap-3 bg-grey-5 p-1 rounded-lg">
          <div className="w-4 h-4 bg-late rounded-full"></div>
          <span className="text-black text-[8px]">Late (5)</span>
        </div>
        <div className="flex w-[48%] items-center gap-3 bg-grey-5 p-1 rounded-lg">
          <div className="w-4 h-4 bg-absent rounded-full"></div>
          <span className="text-black text-[8px]">Absent (3)</span>
        </div>
        <div className="flex w-[60%] items-center gap-3 bg-grey-5 p-1 rounded-lg">
          <div className="w-4 h-4 bg-ontime rounded-full"></div>
          <span className="text-black text-[8px]">On Time (19) </span>
        </div>
      </div>
    </div>
  );
};


export default DailyAttendanceCard
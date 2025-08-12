import Image from "next/image";


const EmployeeGrowthCard = () => {
  return (
    <div className="md:absolute md:top-[230px] md:right-[110px] bg-white rounded-lg p-4 w-[350px] md:w-[400px] h-[300px] ">
      <h2 className="text-xs font-semibold text-black text-center">
        Employee Growth
      </h2>

      <div className="relative h-48 mb-6 bg-gray-50 rounded-2xl flex items-center justify-center">
        <div className="absolute left-[-30px]">
          <Image
            src={'/gif/EmployeeGrowth.gif'}
            alt={'EmployeeGrowth'}
            width={500}
            height={500}
            className="max-w-[114%]"
          />
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500 px-2">
        <span>2019</span>
        <span>2020</span>
        <span>2021</span>
        <span>2022</span>
        <span>2023</span>
        <span>2024</span>
      </div>
    </div>
  );
};

export default EmployeeGrowthCard;
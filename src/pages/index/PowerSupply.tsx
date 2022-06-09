export const PowerSupply = () => {
  return (
    <div className="absolute top-28 left-[18px] text-[6px] text-gray-300 md:left-11">
      <div className="flex items-center">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="-ml-2 w-4 h-4 rounded-full border-2 border-y-transparent border-r-gray-300 border-l-transparent"></div>
        <div className="-ml-2 w-4 h-4 rounded-full border-2 border-y-transparent border-r-gray-300 border-l-transparent"></div>
        <div className="-ml-2 w-4 h-4 rounded-full border-2 border-y-transparent border-r-gray-300 border-l-transparent"></div>
      </div>
      <div className="mt-1 italic">POWER</div>
    </div>
  );
};

export const Speaker = () => (
  <div className="absolute right-3 -bottom-2 -rotate-12">
    <div className="grid grid-cols-8 grid-rows-[8] gap-[2px] w-20 h-20">
      {volumeHole.map((item, index) => (
        <div
          key={index}
          className={`w-1 h-1 rounded-full bg-gray-600 ${
            index === 0
              ? "col-start-2"
              : index === 5
              ? "col-span-2"
              : index === 54
              ? "col-start-2"
              : index === 59
              ? "col-span-2"
              : "col-span-1"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const volumeHole = [
  // "",
  // "",
  // "",
  // "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

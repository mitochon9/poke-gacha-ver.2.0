export const CrossKey = () => (
  <div className="grid grid-cols-3">
    {["", "▲", "", "◀", "●", "▶", "", "▼", ""].map((item, index) => (
      <div
        key={index}
        className={`w-8 h-8
            ${
              index === 0
                ? "bg-transparent"
                : index === 2
                ? "bg-transparent"
                : index === 1
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 3
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 4
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-3xl"
                : index === 5
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 6
                ? "bg-transparent"
                : index === 7
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 8
                ? "bg-transparent"
                : "bg-gray-700 border border-gray-700"
            }
            `}
      >
        {item}
      </div>
    ))}
  </div>
);

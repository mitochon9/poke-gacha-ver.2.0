import type { PowerSupplyProps } from "./PowerSupply.type";

export const baseId = "molecule-power-supply";

export const PowerSupply: React.FC<PowerSupplyProps> = ({ semicircle }) => (
  <>
    <div className="text-[6px] text-gray-300">
      <div className="flex items-center text-[6px] text-gray-300">
        <div
          data-testid={`${baseId}-lamp`}
          className="w-2 h-2 bg-red-500 rounded-full"
        />
        {semicircle.map((item, index) => (
          <div
            key={index}
            className="-ml-2 w-4 h-4 rounded-full border-2 border-y-transparent border-r-gray-300 border-l-transparent"
          />
        ))}
      </div>
      <div data-testid={`${baseId}-power`} className="italic">
        POWER
      </div>
    </div>
  </>
);

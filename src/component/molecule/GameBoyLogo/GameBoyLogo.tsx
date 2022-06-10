import type { GameBoyLogoProps } from "./GameBoyLogo.type";

export const baseId = "molecule-game-boy-logo";

export const GameBoyLogo: React.FC<GameBoyLogoProps> = ({ character }) => (
  <>
    <div className="flex text-2xl italic font-bold text-gray-200">
      <span data-testid={baseId} className="mr-2">
        GAME BOY
      </span>
      <div className="mt-1 font-kalam">
        {character.map((item, index) => (
          <span
            key={index}
            data-testid={`${baseId}-${index}`}
            className={
              index === 0
                ? "text-[#FB4E8B]"
                : index === 1
                ? "text-[#AE97F1]"
                : index === 2
                ? "text-[#BBE880]"
                : index === 3
                ? "text-[#FAEB67]"
                : index === 4
                ? "text-[#8CD0FF]"
                : ""
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </>
);

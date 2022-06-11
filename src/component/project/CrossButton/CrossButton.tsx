import type { CrossButtonProps } from "./CrossButton.type";

export const baseId = "project-cross-button";

export const CrossButton: React.FC<CrossButtonProps> = ({ keyList }) => (
  <>
    <div className="grid grid-cols-3 w-[120px] h-[120px]">
      {keyList.map((key, index) => (
        <button
          key={index}
          data-testid={`${baseId}-${key}`}
          className={`w-10 h-10
        ${
          key === ""
            ? "bg-transparent"
            : key === "●"
            ? "cursor-default bg-gray-800 text-gray-700 flex justify-center items-center text-2xl"
            : "bg-gray-800 text-gray-700 flex justify-center items-center text-2xl"
        }
        `}
        >
          {key}
        </button>
      ))}
    </div>
  </>
);

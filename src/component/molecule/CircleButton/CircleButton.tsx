import type { CircleButtonProps } from "./CircleButton.type";

export const baseId = "molecule-circle-button";

export const CircleButton: React.FC<CircleButtonProps> = ({
  buttonType,
  onClick,
}) => (
  <>
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center mt-4 w-16 h-16 text-2xl text-gray-700 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black"
    >
      {buttonType === "A" ? "A" : buttonType === "B" ? "B" : null}
    </button>
  </>
);

import type { EllipseButtonProps } from "./EllipseButton.type";

export const baseId = "molecule-ellipse-button";

export const EllipseButton: React.FC<EllipseButtonProps> = ({
  buttonType,
  onClick,
}) => (
  <>
    <div>
      <button
        type="button"
        onClick={onClick}
        className="w-14 h-5 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
      />
      <span
        data-testid={`${baseId}-${buttonType}-text`}
        className="flex gap-x-8 justify-center mt-1 w-14 text-xs text-gray-500"
      >
        {buttonType === "start"
          ? "START"
          : buttonType === "select"
          ? "SELECT"
          : null}
      </span>
    </div>
  </>
);

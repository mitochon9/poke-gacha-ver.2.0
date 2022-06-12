import { EllipseButton } from "src/component/molecule/EllipseButton";

import type { StartSelectButtonProps } from "./StartSelectButton.type";

export const baseId = "project-start-select-button";

export const StartSelectButton: React.FC<StartSelectButtonProps> = ({
  changeScreenSelect,
  changeScreenStart,
}) => (
  <>
    <div className="flex gap-x-6">
      <div data-testid={`${baseId}-select`}>
        <EllipseButton buttonType="select" onClick={changeScreenSelect} />
      </div>

      <div data-testid={`${baseId}-start`}>
        <EllipseButton buttonType="start" onClick={changeScreenStart} />
      </div>
    </div>
  </>
);

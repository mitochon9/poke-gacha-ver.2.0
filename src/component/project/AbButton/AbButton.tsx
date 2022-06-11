import { CircleButton } from "src/component/molecule/CircleButton";

import type { AbButtonProps } from "./AbButton.type";

export const baseId = "project-ab-button";

export const AbButton: React.FC<AbButtonProps> = () => (
  <>
    <div className="flex gap-x-4">
      <div data-testid={`${baseId}-B`} className="mt-4">
        <CircleButton buttonType="B" />
      </div>

      <div data-testid={`${baseId}-A`}>
        <CircleButton buttonType="A" />
      </div>
    </div>
  </>
);

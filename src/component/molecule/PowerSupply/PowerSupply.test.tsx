import { render, screen } from "@testing-library/react";

import { baseId, PowerSupply } from "./PowerSupply";
import { propObj } from "./PowerSupply.props";
import type { PowerSupplyProps } from "./PowerSupply.type";

let props: PowerSupplyProps;

describe("component/molecule/PowerSupply", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("電源ランプの色が正しいこと", () => {
      render(<PowerSupply {...props} />);
      expect(screen.getByTestId(`${baseId}-lamp`)).toHaveClass("bg-red-500");
    });

    it("POWER と表示されていること", () => {
      render(<PowerSupply {...props} />);
      expect(screen.getByTestId(`${baseId}-power`)).toHaveTextContent("POWER");
    });
  });
});

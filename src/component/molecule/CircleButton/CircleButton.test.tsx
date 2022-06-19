import { render, screen } from "@testing-library/react";

import { CircleButton } from "./CircleButton";
import { propObj } from "./CircleButton.props";
import type { CircleButtonProps } from "./CircleButton.type";

let props: CircleButtonProps;

describe("component/molecule/CircleButton", () => {
  describe("buttonTypeA", () => {
    beforeEach(() => {
      props = propObj.buttonTypeA;
    });

    it("ボタンに A と表示されていること", () => {
      render(<CircleButton {...props} />);
      expect(screen.getByRole("button")).toHaveTextContent("A");
    });
  });

  describe("buttonTypeB", () => {
    beforeEach(() => {
      props = propObj.buttonTypeB;
    });

    it("ボタンに B と表示されていること", () => {
      render(<CircleButton {...props} />);
      expect(screen.getByRole("button")).toHaveTextContent("B");
    });
  });
});

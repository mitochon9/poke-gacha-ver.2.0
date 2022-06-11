import { render, screen } from "@testing-library/react";

import { baseId, StartSelectButton } from "./StartSelectButton";
import { propObj } from "./StartSelectButton.props";
import type { StartSelectButtonProps } from "./StartSelectButton.type";

let props: StartSelectButtonProps;

describe("component/project/StartSelectButton", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("START ボタンが正しく表示されていること", () => {
      render(<StartSelectButton {...props} />);
      expect(screen.getByTestId(`${baseId}-start`)).toBeInTheDocument();
    });

    it("SELECT ボタンが正しく表示されていること", () => {
      render(<StartSelectButton {...props} />);
      expect(screen.getByTestId(`${baseId}-select`)).toBeInTheDocument();
    });
  });
});

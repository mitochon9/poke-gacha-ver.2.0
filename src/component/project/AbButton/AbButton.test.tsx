import { render, screen } from "@testing-library/react";

import { AbButton, baseId } from "./AbButton";
import { propObj } from "./AbButton.props";
import type { AbButtonProps } from "./AbButton.type";

let props: AbButtonProps;

describe("component/project/AbButton", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("A ボタンが正しく表示されていること", () => {
      render(<AbButton {...props} />);
      expect(screen.getByTestId(`${baseId}-A`)).toBeInTheDocument();
    });

    it("B ボタンが正しく表示されていること", () => {
      render(<AbButton {...props} />);
      expect(screen.getByTestId(`${baseId}-B`)).toBeInTheDocument();
    });

    it("B ボタンが A ボタンより 16px 下の位置にあること", () => {
      render(<AbButton {...props} />);
      expect(screen.getByTestId(`${baseId}-B`)).toHaveClass("mt-4");
    });
  });
});

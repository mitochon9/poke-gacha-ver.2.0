import { render, screen } from "@testing-library/react";

import { baseId, CrossButton } from "./CrossButton";
import { propObj } from "./CrossButton.props";
import type { CrossButtonProps } from "./CrossButton.type";

let props: CrossButtonProps;

describe("component/project/CrossButton", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("▲ キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(screen.getByTestId(`${baseId}-▲`)).toHaveTextContent("▲");
    });

    it("◀ キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(screen.getByTestId(`${baseId}-◀`)).toHaveTextContent("◀");
    });

    it("▶ キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(screen.getByTestId(`${baseId}-▶`)).toHaveTextContent("▶");
    });

    it("▼ キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(screen.getByTestId(`${baseId}-▼`)).toHaveTextContent("▼");
    });

    it("● キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(screen.getByTestId(`${baseId}-●`)).toHaveTextContent("●");
    });
  });
});

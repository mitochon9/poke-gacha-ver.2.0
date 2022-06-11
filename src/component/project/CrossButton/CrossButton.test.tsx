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
      expect(
        screen.getByTestId(`${baseId}-${props.keyList[1]}`)
      ).toHaveTextContent("▲");
    });

    it("◀ キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(
        screen.getByTestId(`${baseId}-${props.keyList[3]}`)
      ).toHaveTextContent("◀");
    });

    it("▶ キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(
        screen.getByTestId(`${baseId}-${props.keyList[5]}`)
      ).toHaveTextContent("▶");
    });

    it("▼ キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(
        screen.getByTestId(`${baseId}-${props.keyList[7]}`)
      ).toHaveTextContent("▼");
    });

    it("● キーが正しく表示されていること", () => {
      render(<CrossButton {...props} />);
      expect(
        screen.getByTestId(`${baseId}-${props.keyList[4]}`)
      ).toHaveTextContent("●");
    });
  });
});

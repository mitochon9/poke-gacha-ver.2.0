import { render, screen } from "@testing-library/react";

import { baseId, EllipseButton } from "./EllipseButton";
import { propObj } from "./EllipseButton.props";
import type { EllipseButtonProps } from "./EllipseButton.type";

let props: EllipseButtonProps;

describe("component/molecule/EllipseButton", () => {
  describe("buttonTypeStart", () => {
    beforeEach(() => {
      props = propObj.buttonTypeStart;
    });

    it("ボタン下部に Start と表示されていること", () => {
      render(<EllipseButton {...props} />);
      expect(
        screen.getByTestId(`${baseId}-${props.buttonType}-text`)
      ).toHaveTextContent("START");
    });
  });

  describe("buttonTypeSelect", () => {
    beforeEach(() => {
      props = propObj.buttonTypeSelect;
    });

    it("ボタン下部に SELECT と表示されていること", () => {
      render(<EllipseButton {...props} />);
      expect(
        screen.getByTestId(`${baseId}-${props.buttonType}-text`)
      ).toHaveTextContent("SELECT");
    });
  });
});

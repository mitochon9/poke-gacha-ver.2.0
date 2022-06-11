import { render, screen } from "@testing-library/react";

import { baseId, GameBoyLogo } from "./GameBoyLogo";
import { propObj } from "./GameBoyLogo.props";
import type { GameBoyLogoProps } from "./GameBoyLogo.type";

let props: GameBoyLogoProps;

describe("component/molecule/GameBoyLogo", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("GAME BOY と表示されていること", () => {
      render(<GameBoyLogo {...props} />);
      expect(screen.getByTestId(baseId)).toHaveTextContent("GAME BOY");
    });

    it("COLOR の各文字と各色が正しく表示されていること", () => {
      render(<GameBoyLogo {...props} />);
      // C
      expect(screen.getByTestId(`${baseId}-0`)).toHaveTextContent("C");
      expect(screen.getByTestId(`${baseId}-0`)).toHaveClass("text-[#FB4E8B]");

      // O
      expect(screen.getByTestId(`${baseId}-1`)).toHaveTextContent("O");
      expect(screen.getByTestId(`${baseId}-1`)).toHaveClass("text-[#AE97F1]");

      // L
      expect(screen.getByTestId(`${baseId}-2`)).toHaveTextContent("L");
      expect(screen.getByTestId(`${baseId}-2`)).toHaveClass("text-[#BBE880]");

      // O
      expect(screen.getByTestId(`${baseId}-3`)).toHaveTextContent("O");
      expect(screen.getByTestId(`${baseId}-3`)).toHaveClass("text-[#FAEB67]");

      // R
      expect(screen.getByTestId(`${baseId}-4`)).toHaveTextContent("R");
      expect(screen.getByTestId(`${baseId}-4`)).toHaveClass("text-[#8CD0FF]");
    });
  });
});

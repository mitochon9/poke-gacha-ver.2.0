import { render, screen } from "@testing-library/react";

import { baseId, Display } from "./Display";
import { propObj } from "./Display.props";
import type { DisplayProps } from "./Display.type";

let props: DisplayProps;

describe("component/project/Display", () => {
  describe("top", () => {
    beforeEach(() => {
      props = propObj.top;
    });

    it("Top 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-top`)).toBeInTheDocument();
    });

    it("電源ランプが正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-power-supply`)).toBeInTheDocument();
    });

    it("GameBoyLogo が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-game-boy-logo`)).toBeInTheDocument();
    });
  });

  describe("lottery", () => {
    beforeEach(() => {
      props = propObj.lottery;
    });

    it("Lottery 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-lottery`)).toBeInTheDocument();
    });
  });

  describe("result", () => {
    beforeEach(() => {
      props = propObj.result;
    });

    it("Result 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-result`)).toBeInTheDocument();
    });
  });

  describe("pokedex", () => {
    beforeEach(() => {
      props = propObj.pokedex;
    });

    it("Pokedex 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-pokedex`)).toBeInTheDocument();
    });
  });

  describe("delete", () => {
    beforeEach(() => {
      props = propObj.deleteIsConfirm;
    });

    it("Delete 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-delete`)).toBeInTheDocument();
    });
  });
});

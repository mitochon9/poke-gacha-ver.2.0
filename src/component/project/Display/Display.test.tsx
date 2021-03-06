import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

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

  describe("animation", () => {
    beforeEach(() => {
      props = propObj.animation;
    });

    it("Lottery 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(screen.getByTestId(`${baseId}-animation`)).toBeInTheDocument();
    });
  });

  describe("result", () => {
    beforeEach(() => {
      props = propObj.result;
    });

    it("Result 画面が正しく表示されていること", () => {
      render(
        <RecoilRoot>
          <Display {...props} />
        </RecoilRoot>
      );
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

  describe("deleteIsConfirm", () => {
    beforeEach(() => {
      props = propObj.deleteIsConfirm;
    });

    it("DeleteIsConfirm 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(
        screen.getByTestId(`${baseId}-delete-is-confirm`)
      ).toBeInTheDocument();
    });
  });

  describe("deleteIsComplete", () => {
    beforeEach(() => {
      props = propObj.deleteIsComplete;
    });

    it("DeleteIsComplete 画面が正しく表示されていること", () => {
      render(<Display {...props} />);
      expect(
        screen.getByTestId(`${baseId}-delete-is-complete`)
      ).toBeInTheDocument();
    });
  });
});

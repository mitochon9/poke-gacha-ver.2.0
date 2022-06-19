import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { baseId, defaultProps, Home } from "src/pages";

describe("pages/Home", () => {
  describe("default", () => {
    it("Display が画面に正しく表示されていること", () => {
      render(
        <RecoilRoot>
          <Home {...defaultProps} />
        </RecoilRoot>
      );
      expect(screen.getByTestId(`${baseId}-display`)).toBeInTheDocument();
    });

    it("NintendoLogo が画面に正しく表示されていること", () => {
      render(
        <RecoilRoot>
          <Home {...defaultProps} />
        </RecoilRoot>
      );
      expect(screen.getByTestId(`${baseId}-nintendo-logo`)).toBeInTheDocument();
    });

    it("CrossButton が画面に正しく表示されていること", () => {
      render(
        <RecoilRoot>
          <Home {...defaultProps} />
        </RecoilRoot>
      );
      expect(screen.getByTestId(`${baseId}-cross-button`)).toBeInTheDocument();
    });

    it("ABButton が画面に正しく表示されていること", () => {
      render(
        <RecoilRoot>
          <Home {...defaultProps} />
        </RecoilRoot>
      );
      expect(screen.getByTestId(`${baseId}-A-B-button`)).toBeInTheDocument();
    });

    it("StartSelectButton が画面に正しく表示されていること", () => {
      render(
        <RecoilRoot>
          <Home {...defaultProps} />
        </RecoilRoot>
      );
      expect(
        screen.getByTestId(`${baseId}-start-select-button`)
      ).toBeInTheDocument();
    });

    it("Speaker が画面に正しく表示されていること", () => {
      render(
        <RecoilRoot>
          <Home {...defaultProps} />
        </RecoilRoot>
      );
      expect(screen.getByTestId(`${baseId}-speaker`)).toBeInTheDocument();
    });
  });
});

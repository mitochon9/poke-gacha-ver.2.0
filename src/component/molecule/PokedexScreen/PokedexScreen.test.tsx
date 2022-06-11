import { render, screen } from "@testing-library/react";

import { baseId, PokedexScreen } from "./PokedexScreen";
import { propObj } from "./PokedexScreen.props";
import type { PokedexScreenProps } from "./PokedexScreen.type";

let props: PokedexScreenProps;

describe("component/molecule/PokedexScreen", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("ポケモン図鑑の画面が正しく表示されていること", () => {
      render(<PokedexScreen {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });

    it("つかまえたポケモン と正しく表示されていること", () => {
      render(<PokedexScreen {...props} />);
      expect(screen.getByRole("heading")).toHaveTextContent(
        "つかまえたポケモン"
      );
    });
  });
});

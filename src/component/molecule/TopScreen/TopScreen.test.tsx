import { render, screen } from "@testing-library/react";

import { baseId, TopScreen } from "./TopScreen";
import { propObj } from "./TopScreen.props";
import type { TopScreenProps } from "./TopScreen.type";

let props: TopScreenProps;

describe("component/molecule/TopScreen", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("タイトルが正しく表示されていること", () => {
      render(<TopScreen {...props} />);
      expect(screen.getByTestId(`${baseId}-title`)).toHaveTextContent(
        "ポケットモンスター"
      );
    });

    it("サブタイトルが正しく表示されていること", () => {
      render(<TopScreen {...props} />);
      expect(screen.getByText("POCKET MONSTERS")).toBeInTheDocument();
      expect(screen.getByText("Red Version")).toBeInTheDocument();
    });

    it("Press A button が表示され、点滅していること", () => {
      render(<TopScreen {...props} />);
      const pressAButton = screen.getByText("Press A button");
      expect(pressAButton).toBeInTheDocument();
      expect(pressAButton).toHaveClass("flash");
    });

    it("ポケモン図鑑への案内が正しく表示されていること", () => {
      render(<TopScreen {...props} />);
      expect(
        screen.getByText("セレクトボタンでモンスター図鑑へ")
      ).toBeInTheDocument();
    });

    it("TopScreen の フッターが正しく表示されていること", () => {
      render(<TopScreen {...props} />);
      expect(screen.getByText("©1995 GAME FREAK Inc.")).toBeInTheDocument();
    });

    it("データ削除への案内が正しく表示されていること", () => {
      render(<TopScreen {...props} />);
      expect(screen.getByText("Press START")).toBeInTheDocument();
      expect(screen.getByRole("button")).toHaveTextContent("データ削除");
    });
  });
});

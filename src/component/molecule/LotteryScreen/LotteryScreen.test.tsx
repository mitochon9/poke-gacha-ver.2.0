import { render, screen } from "@testing-library/react";

import { baseId, LotteryScreen } from "./LotteryScreen";
import { propObj } from "./LotteryScreen.props";
import type { LotteryScreenProps } from "./LotteryScreen.type";

let props: LotteryScreenProps;

describe("component/molecule/LotteryScreen", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("抽選画面が正しく表示されていること", () => {
      render(<LotteryScreen {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });

    it("アニメーションが正しく表示されていること", () => {
      render(<LotteryScreen {...props} />);
      expect(screen.getByRole("img")).toHaveClass("ball-animation");
    });
  });
});

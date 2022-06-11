import { render, screen } from "@testing-library/react";

import { baseId, DeleteScreen } from "./DeleteScreen";
import { propObj } from "./DeleteScreen.props";
import type { DeleteScreenProps } from "./DeleteScreen.type";

let props: DeleteScreenProps;

describe("component/molecule/DeleteScreen", () => {
  describe("confirm", () => {
    beforeEach(() => {
      props = propObj.confirm;
    });

    it("削除確認画面が正しく表示されていること", () => {
      render(<DeleteScreen {...props} />);
      expect(screen.getByTestId(`${baseId}-confirm`)).toBeInTheDocument();
    });
  });

  describe("complete", () => {
    beforeEach(() => {
      props = propObj.complete;
    });

    it("削除確認画面が正しく表示されていること", () => {
      render(<DeleteScreen {...props} />);
      expect(screen.getByTestId(`${baseId}-complete`)).toBeInTheDocument();
    });
  });
});

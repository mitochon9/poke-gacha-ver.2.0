import { render, screen } from "@testing-library/react";

import { baseId, DeleteIsCompleteScreen } from "./DeleteIsCompleteScreen";
import { propObj } from "./DeleteIsCompleteScreen.props";
import type { DeleteIsCompleteScreenProps } from "./DeleteIsCompleteScreen.type";

let props: DeleteIsCompleteScreenProps;

describe("component/molecule/DeleteIsCompleteScreen", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("削除完了画面が正しく表示されていること", () => {
      render(<DeleteIsCompleteScreen {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });

    it("閉じる ボタンが正しく表示されていること", () => {
      render(<DeleteIsCompleteScreen {...props} />);
      expect(screen.getByRole("button")).toHaveTextContent("閉じる");
    });
  });
});

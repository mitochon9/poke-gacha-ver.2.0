import { render, screen } from "@testing-library/react";

import { baseId, DeleteIsConfirmScreen } from "./DeleteIsConfirmScreen";
import { propObj } from "./DeleteIsConfirmScreen.props";
import type { DeleteIsConfirmScreenProps } from "./DeleteIsConfirmScreen.type";

let props: DeleteIsConfirmScreenProps;

describe("component/molecule/DeleteIsConfirmScreen", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("削除確認画面が正しく表示されていること", () => {
      render(<DeleteIsConfirmScreen {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });

    it("削除する ボタンが正しく表示されていること", () => {
      render(<DeleteIsConfirmScreen {...props} />);
      expect(screen.getAllByRole("button")[0]).toHaveTextContent(/削除する/);
    });

    it("キャンセル ボタンが正しく表示されていること", () => {
      render(<DeleteIsConfirmScreen {...props} />);
      expect(screen.getAllByRole("button")[1]).toHaveTextContent(/キャンセル/);
    });
  });
});

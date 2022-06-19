import { render, screen } from "@testing-library/react";

import { baseId, Footer } from "./Footer";
import { propObj } from "./Footer.props";
import type { FooterProps } from "./Footer.type";

let props: FooterProps;

describe("component/molecule/Footer", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("コピーライトが表示されていること", () => {
      render(<Footer {...props} />);
      expect(screen.getByTestId(`${baseId}-copy`)).toHaveTextContent(
        "©2022 たかはし"
      );
    });
  });
});

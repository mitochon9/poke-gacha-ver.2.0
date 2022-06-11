import { render, screen } from "@testing-library/react";

import { baseId, NintendoLogo } from "./NintendoLogo";

describe("component/molecule/NintendoLogo", () => {
  describe("default", () => {
    it("Nintendo と表示されていること", () => {
      render(<NintendoLogo />);
      expect(screen.getByTestId(baseId)).toHaveTextContent("Nintendo");
    });
  });
});

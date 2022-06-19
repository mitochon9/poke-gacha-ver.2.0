import { render, screen } from "@testing-library/react";

import { baseId, Speaker } from "./Speaker";
import { propObj } from "./Speaker.props";
import type { SpeakerProps } from "./Speaker.type";

let props: SpeakerProps;

describe("component/molecule/Speaker", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("volumeHole の左上が 透明であること", () => {
      render(<Speaker {...props} />);
      expect(screen.getByTestId(`${baseId}-1`)).toHaveClass("bg-transparent");
    });
  });

  it("volumeHole の右上が 透明であること", () => {
    render(<Speaker {...props} />);
    expect(screen.getByTestId(`${baseId}-8`)).toHaveClass("bg-transparent");
  });

  it("volumeHole の左下が 透明であること", () => {
    render(<Speaker {...props} />);
    expect(screen.getByTestId(`${baseId}-57`)).toHaveClass("bg-transparent");
  });
});

it("volumeHole の右上が 透明であること", () => {
  render(<Speaker {...props} />);
  expect(screen.getByTestId(`${baseId}-64`)).toHaveClass("bg-transparent");
});

import { render, screen } from "@testing-library/react";

import { baseId, ResultScreen } from "./ResultScreen";
import { propObj } from "./ResultScreen.props";
import type { ResultScreenProps } from "./ResultScreen.type";

let props: ResultScreenProps;

describe("component/molecule/ResultScreen", () => {
  describe("default", () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it("ポケモンの id が正しく表示されていること", () => {
      render(<ResultScreen {...props} />);
      expect(screen.getByTestId(`${baseId}-id`)).toHaveTextContent(
        `No.${props.pokemon.id}`
      );
    });

    it("ポケモンの名前が正しく表示されていること", () => {
      render(<ResultScreen {...props} />);
      expect(screen.getByTestId(`${baseId}-name`)).toHaveTextContent(
        props.pokemon.name
      );
    });
  });

  it("ポケモンの種別が正しく表示されていること", () => {
    render(<ResultScreen {...props} />);
    expect(screen.getByTestId(`${baseId}-genus`)).toHaveTextContent(
      props.pokemon.genus
    );
  });

  it("ポケモンのたかさが正しく表示されていること", () => {
    render(<ResultScreen {...props} />);
    expect(screen.getByTestId(`${baseId}-height`)).toHaveTextContent(
      `${(props.pokemon.height / 10).toFixed(1)}m`
    );
  });

  it("ポケモンのおもさが正しく表示されていること", () => {
    render(<ResultScreen {...props} />);
    expect(screen.getByTestId(`${baseId}-weight`)).toHaveTextContent(
      `${(props.pokemon.weight / 10).toFixed(1)}kg`
    );
  });

  it("ポケモンの説明文が正しく表示されていること", () => {
    render(<ResultScreen {...props} />);
    expect(screen.getByTestId(`${baseId}-commentary`)).toHaveTextContent(
      props.pokemon.commentary
    );
  });
});

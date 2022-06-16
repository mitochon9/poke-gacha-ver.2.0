import { renderHook } from "@testing-library/react";
import { act } from "react-test-renderer";
import { RecoilRoot } from "recoil";
import { usePokemon } from "src/hook/usePokemon";

describe("useScreen", () => {
  it("最初に Hook を呼び出した時、 pokemon が undefined であること", () => {
    const { result } = renderHook(() => usePokemon(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.pokemon).toEqual(undefined);
  });

  it("最初に Hook を呼び出した時、 pokemonList が空であること", () => {
    const { result } = renderHook(() => usePokemon(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.pokemonList).toEqual([]);
  });

  it("addPokemon() を呼び出した時、 pokemon にデータがセットされること", () => {
    const { result } = renderHook(() => usePokemon(), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.addPokemon();
    });

    expect(result.current.pokemon).not.toEqual(undefined);
  });

  it("addPokemon() を呼び出した時、 pokemon が undefined ではないこと", () => {
    const { result } = renderHook(() => usePokemon(), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.addPokemon();
    });

    expect(result.current.pokemon).not.toEqual(undefined);
  });

  it("addPokemon() を呼び出した時、 pokemonList が空ではないこと", () => {
    const { result } = renderHook(() => usePokemon(), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.addPokemon();
    });

    expect(result.current.pokemonList).not.toEqual([]);
  });
});

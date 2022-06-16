import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useScreen } from "src/hook/useScreen";

describe("useScreen", () => {
  it("最初に Hook を呼び出した時、 初期値に が１が入っていること", () => {
    const { result } = renderHook(() => useScreen(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.screenType).toEqual("top");
  });

  it("setScreen を呼び出した時に正しく screenType === 'lottery' となること", () => {
    const { result } = renderHook(() => useScreen(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.setScreenType("lottery");
    });

    expect(result.current.screenType).toEqual("lottery");
  });

  it("setScreen を呼び出した時に正しく screenType === 'result' となること", () => {
    const { result } = renderHook(() => useScreen(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.setScreenType("result");
    });

    expect(result.current.screenType).toEqual("result");
  });

  it("setScreen を呼び出した時に正しく screenType === 'pokedex' となること", () => {
    const { result } = renderHook(() => useScreen(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.setScreenType("pokedex");
    });

    expect(result.current.screenType).toEqual("pokedex");
  });

  it("setScreen を呼び出した時に正しく screenType === 'deleteIsConfirm' となること", () => {
    const { result } = renderHook(() => useScreen(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.setScreenType("deleteIsConfirm");
    });

    expect(result.current.screenType).toEqual("deleteIsConfirm");
  });

  it("setScreen を呼び出した時に正しく screenType === 'deleteIsComplete' となること", () => {
    const { result } = renderHook(() => useScreen(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.setScreenType("deleteIsComplete");
    });

    expect(result.current.screenType).toEqual("deleteIsComplete");
  });
});

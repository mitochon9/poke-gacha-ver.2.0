import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useBodyColor } from "src/hook/useBodyColor";

describe("useBodyColor", () => {
  it("最初に Hook を呼び出した時、 初期値に が 'red' が入っていること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.bodyColor).toEqual("red");
  });

  it("switchColor を呼び出した時に黄色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.switchColor();
    });

    expect(result.current.bodyColor).toEqual("yellow");
  });

  it("reverseSwitchColor を呼び出した時に青色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.reverseSwitchColor();
    });

    expect(result.current.bodyColor).toEqual("blue");
  });
});

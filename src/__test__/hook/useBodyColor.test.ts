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

  it("２回 switchColor を呼び出した時に紫色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });

    for (let index = 0; index < 2; index++) {
      act(() => {
        result.current.switchColor();
      });
    }

    expect(result.current.bodyColor).toEqual("purple");
  });

  it("３回 switchColor を呼び出した時に青色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });
    for (let index = 0; index < 3; index++) {
      act(() => {
        result.current.switchColor();
      });
    }

    expect(result.current.bodyColor).toEqual("blue");
  });

  it("４回 switchColor を呼び出した時に赤色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });
    for (let index = 0; index < 4; index++) {
      act(() => {
        result.current.switchColor();
      });
    }

    expect(result.current.bodyColor).toEqual("red");
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

  it("２回 reverseSwitchColor を呼び出した時に紫色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });
    for (let index = 0; index < 2; index++) {
      act(() => {
        result.current.reverseSwitchColor();
      });
    }

    expect(result.current.bodyColor).toEqual("purple");
  });

  it("３回 reverseSwitchColor を呼び出した時に黄色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });
    for (let index = 0; index < 3; index++) {
      act(() => {
        result.current.reverseSwitchColor();
      });
    }

    expect(result.current.bodyColor).toEqual("yellow");
  });

  it("４回 reverseSwitchColor を呼び出した時に赤色がセットされること", () => {
    const { result } = renderHook(() => useBodyColor(), {
      wrapper: RecoilRoot,
    });
    for (let index = 0; index < 4; index++) {
      act(() => {
        result.current.reverseSwitchColor();
      });
    }

    expect(result.current.bodyColor).toEqual("red");
  });
});

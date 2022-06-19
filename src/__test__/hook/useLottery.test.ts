import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useLottery } from "src/hook/useLottery";

describe("useLottery", () => {
  it("最初に Hook を呼び出した時、 初期値に が１〜１５１の番号 winningNumber にセットされていること", () => {
    const { result } = renderHook(() => useLottery(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.winningNumber).toBeGreaterThanOrEqual(1);
    expect(result.current.winningNumber).toBeLessThanOrEqual(151);
  });

  it("抽選をした際に１〜１５１の番号が winningNumber にセットされていること", () => {
    const { result } = renderHook(() => useLottery(), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.lotteryNumber();
    });

    expect(result.current.winningNumber).toBeGreaterThanOrEqual(1);
    expect(result.current.winningNumber).toBeLessThanOrEqual(151);
  });
});

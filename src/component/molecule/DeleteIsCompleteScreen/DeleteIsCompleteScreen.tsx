import type { DeleteIsCompleteScreenProps } from "./DeleteIsCompleteScreen.type";

export const baseId = "molecule-delete-is-complete-screen";

export const DeleteIsCompleteScreen: React.FC<
  DeleteIsCompleteScreenProps
> = () => (
  <div
    data-testid={baseId}
    className="flex justify-center items-center w-[247px] h-[263px] font-dot"
  >
    <div className="space-y-2 text-center">
      <h2>データ削除</h2>
      <p className="text-sm text-gray-600">削除しました</p>

      <div>
        <button
          disabled
          className="flex gap-x-1 items-center py-2 px-4 text-sm text-gray-900 bg-gray-200 rounded-md"
        >
          <span className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-600">
            A
          </span>
          <span className="text-xs">閉じる</span>
        </button>
      </div>
    </div>
  </div>
);

import type { DeleteScreenProps } from "./DeleteScreen.type";

export const baseId = "molecule-delete-screen";

export const DeleteScreen: React.FC<DeleteScreenProps> = ({ isConfirm }) => (
  <div className="flex justify-center items-center w-[263px] h-[287px] font-dot">
    <div className="space-y-2 text-center">
      <h2>データ削除</h2>
      <p className="text-sm text-gray-600">
        {isConfirm ? "本当に削除しますか？" : "削除しました"}
      </p>

      {isConfirm ? (
        <div data-testid={`${baseId}-confirm`} className="flex gap-x-2">
          <button
            disabled
            className="flex gap-x-1 items-center py-2 px-4 text-sm text-gray-900 bg-gray-200 rounded-md"
          >
            <span className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-600">
              A
            </span>
            <span className="text-xs">削除する</span>
          </button>

          <button
            disabled
            className="flex gap-x-1 items-center py-2 px-4 text-sm text-gray-900 bg-gray-200 rounded-md"
          >
            <span className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-600">
              B
            </span>
            <span className="text-xs">キャンセル</span>
          </button>
        </div>
      ) : (
        <div data-testid={`${baseId}-complete`}>
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
      )}
    </div>
  </div>
);

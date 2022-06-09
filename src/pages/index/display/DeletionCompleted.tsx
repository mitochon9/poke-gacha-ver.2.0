import { useSetRecoilState } from "recoil";
import { isDeletionCompletedState } from "src/component/state/isDeletionCompletedAtom";

export const DeletionCompleted = () => {
  const setIsDeletionCompleted = useSetRecoilState(isDeletionCompletedState);
  return (
    <div className="flex relative justify-center items-center w-auto h-60">
      <div>
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          データ削除
        </h2>
        <div className="mt-2">
          <p className="text-sm text-gray-500">削除しました</p>
        </div>

        <div className="mt-4 space-x-2">
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
            onClick={() => {
              return setIsDeletionCompleted(false);
            }}
          >
            <span className="flex justify-center items-center mr-1 w-5 h-5 text-xs rounded-full border border-gray-600">
              A
            </span>
            <span className="text-xs">閉じる</span>
          </button>
        </div>
      </div>
    </div>
  );
};

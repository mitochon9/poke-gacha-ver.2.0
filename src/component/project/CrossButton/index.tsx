import { CrossButton as CrossButtonPresenter } from "./CrossButton";
import type { CrossButtonProps } from "./CrossButton.type";

/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/*
export type { CrossButtonProps };
export { CrossButtonPresenter};
*/

const CrossButton: React.FC = () => {
  const defaultProps: CrossButtonProps = {
    keyList: ["", "▲", "", "◀", "●", "▶", "", "▼", ""],
  };

  return <CrossButtonPresenter {...defaultProps} />;
};

export { CrossButton };

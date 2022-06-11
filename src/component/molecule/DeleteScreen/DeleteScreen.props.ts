import type { DeleteScreenProps } from "./DeleteScreen.type";

const confirmProps: DeleteScreenProps = {
  isConfirm: true,
};

const completeProps: DeleteScreenProps = {
  isConfirm: false,
};

export const propObj: { [key: string]: DeleteScreenProps } = {
  confirm: confirmProps,
  complete: completeProps,
};

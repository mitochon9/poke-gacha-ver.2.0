import type { SpeakerProps } from "./Speaker.type";

const defaultProps: SpeakerProps = {
  volumeHole: Array.from({ length: 64 }, (_, i) => i + 1),
};

export const propObj: { [key: string]: SpeakerProps } = {
  default: defaultProps,
};

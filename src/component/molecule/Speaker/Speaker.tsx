import type { SpeakerProps } from "./Speaker.type";

export const baseId = "molecule-speaker";

export const Speaker: React.FC<SpeakerProps> = ({ volumeHole }) => (
  <>
    <div className="grid grid-cols-8 grid-rows-[8] gap-2 w-20">
      {volumeHole.map((item) => (
        <div
          key={item}
          data-testid={`${baseId}-${item}`}
          className={`w-1 h-1 bg-gray-600 rounded-full
        ${
          item === 1 || item === 8 || item === 57 || item === 64
            ? "bg-transparent"
            : ""
        }
        `}
        />
      ))}
    </div>
  </>
);

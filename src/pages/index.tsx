import { NintendoLogo } from "src/component/molecule/NintendoLogo";
import { Speaker } from "src/component/molecule/Speaker";
import { AbButton } from "src/component/project/AbButton";
import { CrossButton } from "src/component/project/CrossButton";
import { Display } from "src/component/project/Display";
import { StartSelectButton } from "src/component/project/StartSelectButton";
import { useBodyColor } from "src/hook/useBodyColor";

export const baseId = "page-home";

export const Home = () => {
  const { bodyColor } = useBodyColor();

  return (
    <>
      <div
        className={`flex relative flex-col justify-between px-8 pt-4 pb-20 mx-auto min-w-[375px] max-w-[414px] rounded-t-xl rounded-b-[40px]
        ${
          bodyColor === "red"
            ? "bg-[#C83031]"
            : bodyColor === "yellow"
            ? "bg-[#FED20D]"
            : bodyColor === "purple"
            ? "bg-[#543DB8]"
            : bodyColor === "blue"
            ? "bg-[#1C9ACD]"
            : null
        }`}
      >
        <div data-testid={`${baseId}-display`} className="flex justify-center">
          <Display />
        </div>

        <div
          data-testid={`${baseId}-nintendo-logo`}
          className="flex justify-center mt-4"
        >
          <NintendoLogo />
        </div>

        <div className="flex justify-between mt-8">
          <div data-testid={`${baseId}-cross-button`}>
            <CrossButton />
          </div>

          <div data-testid={`${baseId}-A-B-button`} className="mt-4">
            <AbButton />
          </div>
        </div>

        <div
          data-testid={`${baseId}-start-select-button`}
          className="flex justify-center mt-8"
        >
          <StartSelectButton />
        </div>

        <div
          data-testid={`${baseId}-speaker`}
          className="absolute right-4 bottom-4"
        >
          <Speaker />
        </div>
      </div>
    </>
  );
};

export default Home;

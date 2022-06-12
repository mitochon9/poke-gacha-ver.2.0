import type { GetStaticProps } from "next";
import { NintendoLogo } from "src/component/molecule/NintendoLogo";
import { Speaker } from "src/component/molecule/Speaker";
import { AbButton } from "src/component/project/AbButton";
import { CrossButton } from "src/component/project/CrossButton";
import { Display } from "src/component/project/Display";
import { StartSelectButton } from "src/component/project/StartSelectButton";

export interface HomeProps {}

export const defaultProps: HomeProps = {};

export const baseId = "page-home";

export const Home = () => (
  <>
    <div className="flex relative flex-col justify-between px-8 pt-4 pb-20 mx-auto min-w-[375px] max-w-[414px] bg-[#C83031] rounded-t-xl rounded-b-[40px]">
      <div className="flex justify-center">
        <Display />
      </div>

      <div className="flex justify-center mt-4">
        <NintendoLogo />
      </div>

      <div className="flex justify-between mt-8">
        <CrossButton />

        <AbButton />
      </div>

      <div className="flex justify-center mt-8">
        <StartSelectButton />
      </div>

      <div className="absolute right-4 bottom-4">
        <Speaker />
      </div>
    </div>
  </>
);

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});

export default Home;

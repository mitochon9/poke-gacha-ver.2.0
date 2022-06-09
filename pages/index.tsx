import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = () => {
  return <Index />;
};

IndexPage.getLayout = FixedLayout;

export default IndexPage;

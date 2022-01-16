import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => (
  <div className="flex flex-col mx-auto max-w-lg min-h-[800px] bg-yellow-200 rounded-xl rounded-b-3xl shadow">
    <header>
      <Header />
    </header>
    <main className="flex-1">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

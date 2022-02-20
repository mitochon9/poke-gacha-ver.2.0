import type { CustomLayout } from "next";
import { Footer } from "src/layout/Footer";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => (
  <div className="flex flex-col">
    <main className="flex-1">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

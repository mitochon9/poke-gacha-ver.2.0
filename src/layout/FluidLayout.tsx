import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => (
  <div className="flex flex-col min-h-screen">
    <header>
      <Header />
    </header>
    <main className="flex-1 bg-red-300">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

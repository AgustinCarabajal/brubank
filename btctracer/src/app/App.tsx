import { RouterProvider } from "react-router";

import { QueryClient, QueryClientProvider } from "react-query";
import { router } from "../navigation";

const queryClient = new QueryClient();

/**
 * The App component is a TypeScript React component that provides a QueryClientProvider and a
 * RouterProvider.
 */
export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

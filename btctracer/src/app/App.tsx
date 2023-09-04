import { RouterProvider } from "react-router";

import { QueryClient, QueryClientProvider } from "react-query";
import { router } from "../navigation";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

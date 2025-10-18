import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchProvider from "./context/searchProvider.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </QueryClientProvider>
  </StrictMode>
);

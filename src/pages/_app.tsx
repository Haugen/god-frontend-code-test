import React from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.css";

function App({ Component }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <div className="max-w-7xl px-8 mt-24 mx-auto">
          <Component />
        </div>
      </React.StrictMode>
    </QueryClientProvider>
  );
}

export default App;

import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthContextProvider } from "../src/lib/context/AuthContext/AuthContextProvider";

import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: 10000,
      retry: 0,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

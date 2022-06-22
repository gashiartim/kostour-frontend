import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthContextProvider } from "../src/lib/context/AuthContext/AuthContextProvider";
import Layout from "../src/components/shared/Layout/Layout";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";
import { config } from "../src/lib/helpers/config";

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
      <Head>
        <title>KosTour</title>
      </Head>
      <AuthContextProvider>
        <ToastContainer {...config} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

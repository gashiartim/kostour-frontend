import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthContextProvider } from "../src/lib/context/AuthContext/AuthContextProvider";

import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import Container from "../src/components/shared/Container/Container";
import Header from "../src/components/Header/Header";
import Layout from "../src/components/shared/Layout/Layout";
import Head from "next/head";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

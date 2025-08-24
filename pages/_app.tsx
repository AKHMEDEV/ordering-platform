import { AppProvider } from "@/context";
import { MainLayout } from "@/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";


import { GlobalStyles } from "@/styles//globals"; 

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <GlobalStyles />
        <MainLayout>
          <Component {...pageProps} />
          <Toaster />
        </MainLayout>
      </AppProvider>
    </QueryClientProvider>
  );
}

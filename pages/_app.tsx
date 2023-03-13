import { AppContext } from "@/context/Context";
import { AppProvider } from "@/context/ContextProvider";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <AppProvider>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </AppProvider>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "../context/AuthProvider";
import { Navbar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

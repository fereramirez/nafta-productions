import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;

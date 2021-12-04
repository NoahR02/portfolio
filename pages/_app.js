import Head from "next/head";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
          <title>Noah Reppert - Portfolio</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        body,html {
          margin: 0;
          padding: 0;
          overflow-x:hidden;
        }   
      * {  box-sizing:border-box; font-family: 'Montserrat', sans-serif !important;} `}</style>
    </>
  );
}
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return(
    <React.Fragment>
      <Component {...pageProps} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        body,html {
          margin: 0;
          padding: 0;
          overflow-x:hidden;
        }   
      * {  box-sizing:border-box; font-family: 'Montserrat', sans-serif !important;} `}</style>
    </React.Fragment>
  );
}

export default MyApp
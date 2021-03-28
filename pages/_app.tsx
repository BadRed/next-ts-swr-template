import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SWRConfig } from 'swr';
import axios from 'axios';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;

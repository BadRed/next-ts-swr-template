import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SWRConfig } from 'swr';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;

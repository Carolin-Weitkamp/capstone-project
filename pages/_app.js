import { SWRConfig } from 'swr';
import { GlobalStyle } from '../components/GlobalStyle';
import NavBar from '../components/NavBar/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then(res => res.json()),
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
        <NavBar></NavBar>
      </SWRConfig>
    </>
  );
}

export default MyApp;

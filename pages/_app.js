import { SWRConfig } from 'swr';
import { GlobalStyle } from '../components/GlobalStyle';
import NavBar from '../components/NavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/Themes';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then(res => res.json()),
          }}
        >
          <GlobalStyle />
          <Component {...pageProps} />
          <NavBar themeToggler={themeToggler}></NavBar>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

import { SWRConfig } from 'swr';
import { GlobalStyle } from '../components/GlobalStyle';
import NavBar from '../components/NavBar/NavBar';
import LegalBar from '../components/Legalbar/LegalBar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/Themes';
import { useState } from 'react';
import { useEffect } from 'react';
// import { Example } from '../components/Menu/Example';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [toggleButton, setToggleButton] = useState(false);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    setToggleButton(!toggleButton);
  };

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    isDarkMode ? setTheme('dark') : setTheme('light');
  }, []);

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
          <Component {...pageProps} toggleButton={toggleButton} />
          <NavBar
            themeToggler={themeToggler}
            toggleButton={toggleButton}
          ></NavBar>
          <LegalBar></LegalBar>
          {/* <Example /> */}
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

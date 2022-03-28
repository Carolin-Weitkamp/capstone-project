import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif, 0,400;
}

body {
    padding: 0;
    background-color: #89A693;
}
:root {
    font-family: 'Roboto', sans-serif;
}
`;

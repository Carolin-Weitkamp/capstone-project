import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif, 0,400;
}

body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;
}
:root {
    font-family: 'Roboto', sans-serif;
    --purple-gradient-rl:${({ theme }) => theme.flatcolor}; 
    --navbar:${({ theme }) => theme.navbar};
    --textalternativ: ${({ theme }) => theme.textalternativ};
    --flatcolorfull: ${({ theme }) => theme.flatcolorfull};

}


`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif, 0,400;
}

body {
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}
:root {
    font-family: 'Roboto', sans-serif;
    --lightgreen: hotpink;
    --green-gradient-rl:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 0%, rgba(97,210,134,0.6096639339329482) 100%);
    --green-gradient-tb: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 0%, rgba(97,210,134,0.6096639339329482) 100%);
    --purple-gradient-tb:linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(0, 212, 255, 0) 0%, rgba(158, 51, 198, 0.7581233176864496) 100%);
    --purple-gradient-rl:${({ theme }) => theme.flatcolor}; 
    --navbar:${({ theme }) => theme.navbar};



}


`;

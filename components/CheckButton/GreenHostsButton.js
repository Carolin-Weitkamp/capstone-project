import { render } from 'react-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { withTheme } from 'styled-components';
export { StyledGreenHostsButton };

export default function GreenHostsButton() {
  return (
    <div>
      <StyledGreenHostsButton>Normal</StyledGreenHostsButton>

      <ThemeProvider theme={theme}>
        <StyledGreenHostsButton>Themed</StyledGreenHostsButton>
      </ThemeProvider>
    </div>
  );
}

const StyledGreenHostsButton = styled.button`
  font-size: 1rem;
  padding: 5px 20px 5px 20px;
  margin: 15px 0 0px 30px;
  align-self: center;
  transition: 0.6s;
  cursor: pointer;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  background-color
`;

StyledGreenHostsButton.defaultProps = {
  theme: {
    main: 'hotpink',
  },
};

const theme = {
  main: 'mediumseagreen',
};

// background:
// &:hover {
//   color: purple;
// }
// @media screen and (min-width: 700px) {
//   margin: 10px 10px 10px 0;
//   padding: 10px 40px 10px 40px;
//   font-size: 2rem;
// }
// @media screen and (min-width: 1500px) {
//   margin: 20px 0 20px 0;
//   padding: 20px 80px 20px 80px;
//   font-size: 4rem;
// }

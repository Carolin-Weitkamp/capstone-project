import styled from 'styled-components';
export { StyledGreenHostsButton };

const StyledGreenHostsButton = styled.button`
  background: var(--purple-gradient-rl);
  font-size: 1.1rem;
  border: ${({ theme }) => theme.border};
  padding: 7px 20px 7px 20px;
  margin: 30px 0 0px 30px;
  align-self: center;
  transition: 0.6s;
  cursor: pointer;
  color: var(--textalternativ);
  &:hover {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.flatcolor};
  }
  @media screen and (min-width: 700px) {
    margin: 30px 10px 10px 50px;
    padding: 10px 40px 10px 40px;
    font-size: 1.8rem;
  }
`;

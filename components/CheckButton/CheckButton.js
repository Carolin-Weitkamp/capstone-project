import styled from 'styled-components';
export { StyledCheckButton };

const StyledCheckButton = styled.button`
  background: var(--purple-gradient-rl);
  font-size: 1rem;
  border: ${({ theme }) => theme.border};
  padding: 5px 20px 5px 20px;
  margin: 10px 10px 0px 0;
  align-self: center;
  transition: 0.6s;
  cursor: pointer;
  color: var(--textalternativ);
  &:hover {
    background-color: hotpink;
    color: hotpink;

    /* background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.flatcolor}; */
  }
  @media screen and (min-width: 700px) {
    margin: 10px 10px 10px 0;
    padding: 10px 40px 10px 40px;
    font-size: 1.8rem;
  }
`;

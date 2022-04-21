import styled from 'styled-components';
export { StyledInput };

const StyledInput = styled.input`
  background: var(--purple-gradient-rl);
  width: 200px;
  height: 35px;
  margin: 5px 0 5px 0;
  padding: 0px 10px 0px 7px;
  font-size: 1.1rem;
  border: ${({ theme }) => theme.border};
  align-items: center;
  transition: 0.6s;
  &:hover {
    background-color: white;
  }

  &:hover {
    color: purple;
  }
  @media screen and (min-width: 700px) {
    width: 400px;
    height: 65px;
    margin: 10px 10px 10px 0;
    padding: 0px 0px 0px 12px;
    font-size: 1.8rem;
  }
`;

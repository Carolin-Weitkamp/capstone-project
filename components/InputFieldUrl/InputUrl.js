import styled from 'styled-components';
export { StyledInput };

const StyledInput = styled.input`
  background: var(--purple-gradient-tb);
  width: 200px;
  height: 35px;
  margin: 5px 0 5px 0;
  padding: 0px 10px 0px 6px;
  font-size: 1rem;
  border: 0.25vw solid var(--lightgreen);
  align-items: center;
  color: white;
  transition: 0.6s;
  &:hover {
    background-color: white;
  }

  &:hover {
    color: purple;
  }
  @media screen and (min-width: 700px) {
    width: 400px;
    height: 55px;
    margin: 10px 10px 10px 0;
    padding: 0px 0px 0px 12px;
    font-size: 2rem;
  }
  @media screen and (min-width: 1500px) {
    width: 800px;
    height: 140px;
    margin: 20px 0 20px 0;
    padding: 0px 40px 0px 24px;
    font-size: 4rem;
  }
`;

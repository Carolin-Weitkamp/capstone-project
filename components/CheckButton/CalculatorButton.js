import styled from 'styled-components';

export { StyledCalculatorButton };

const StyledCalculatorButton = styled.button`
  background: var(--purple-gradient-tb);
  font-size: 1rem;
  border: 0.4vw solid var(--lightgreen);
  padding: 5px 20px 5px 20px;
  margin: 15px 0 0px 30px;
  align-self: center;
  color: white;
  transition: 0.6s;
  cursor: pointer;
  &:hover {
    background-color: white;
  }

  &:hover {
    color: purple;
  }
  @media screen and (min-width: 700px) {
    margin: 10px 10px 10px 0;
    padding: 10px 40px 10px 40px;
    font-size: 2rem;
  }
  @media screen and (min-width: 1500px) {
    margin: 20px 0 20px 0;
    padding: 20px 80px 20px 80px;
    font-size: 4rem;
  }
`;

import styled from 'styled-components';
export { StyledInput };

const StyledInput = styled.input`
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
  width: 200px;
  height: 35px;
  margin: 5px 0 5px 0;
  padding: 0px 10px 0px 6px; // in dem Input Feld
  font-size: 1rem;
  border: 0.25vw solid white;
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

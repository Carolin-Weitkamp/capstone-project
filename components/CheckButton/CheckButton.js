import styled from 'styled-components';
export { StyledCheckButton };

const StyledCheckButton = styled.button`
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
  font-size: 1rem;
  border: 0.25vw solid white;
  padding: 5px 20px 5px 20px;
  align-self: center;
  color: white;
  transition: 0.6s;
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

import styled from 'styled-components';
export { StyledInput };

const StyledInput = styled.input`
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
  width: 60vw;
  height: 5vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: 2.5vw;
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
`;

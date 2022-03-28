import styled from 'styled-components';
export { StyledCheckButton };

const StyledCheckButton = styled.button`
  border: none;
  padding: 8px 20px;
  background-color: purple;
  font-size: 1rem;
  color: white;
  align-self: center;
  transition: 0, 6s;

  &:hover {
    background-color: yellow;
  }
`;

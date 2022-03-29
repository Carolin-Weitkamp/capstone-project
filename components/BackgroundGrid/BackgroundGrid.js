import styled from 'styled-components';
export {
  StyledBackgroundGrid,
  StyledTextfield1,
  StyledTextfield2,
  StyledTextField21,
  StyledTextField22,
  StyledTextfield3,
  Area1,
  Area2,
  Area3,
  Area4,
};

const StyledBackgroundGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const StyledTextfield1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  border: 1px solid white;
  text-align: left;
  font-size: 5.4rem;
  font-weight: medium;
  > p {
    font-weight: bold;
    color: white;
    padding-left: 30px;
  }
`;

const StyledTextfield2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  border: 1px solid white;
  text-align: center;
`;

const StyledTextField21 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  border-left: 1px solid white;
  border-right: 1px solid white;
  > input {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 212, 255, 0) 0%,
      rgba(158, 51, 198, 0.7581233176864496) 100%
    );
    width: 500px;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid white;
    align-items: center;
    color: white;
    transition: 0.6s;

    &:hover {
    color: turquoise;
  }
`;

const StyledTextField22 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border: 1px solid white;
  > p {
    font-weight: medium;
    color: white;
    padding-left: 30px;
    font-size: 4.4rem;
  }
`;

const Area1 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border: 1px solid white;
`;

const Area2 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border: 1px solid white;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
`;

const StyledTextfield3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 3.4rem;
  font-weight: medium;
  border: 1px solid white;
  color: white;
`;

const Area3 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border: 1px solid white;
`;

const Area4 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border: 1px solid white;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
`;

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
  max-width: 100vw;
  max-height: 100vh;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const StyledTextfield1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  border-right: 0.35vw solid white;
  text-align: bottom;
  font-weight: medium;
  > div {
    font-weight: medium;
    color: white;
    padding-left: 30px;
    font-size: 8vw;
    transition: 1s;
  }
`;

const StyledTextfield2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  text-align: left;
  > p {
    font-weight: medium;
    padding-left: 30px;
    color: white;
    font-size: 2vw;
    line-height: 1vw;
  }
`;

const StyledTextField21 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  border-left: 0.35vw solid white;
  padding-left: 28px;
`;

const StyledTextField22 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  padding-left: 30px;
  > p {
    font-weight: medium;
    padding-left: 30px;
    font-size: 1vw;
    color: white;
  }
`;

const Area1 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
`;

const Area2 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: 0.35vw solid white;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
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
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  color: white;
  > p {
    font-weight: medium;
    color: white;
    padding-left: 30px;
    font-size: 4vw;
    padding-left: 30px;
  }
`;
/* line height??? */

const Area3 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
`;

const Area4 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-right: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
`;

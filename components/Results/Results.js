import styled from 'styled-components';
export {
  Results,
  GreenHosted,
  Result1,
  Result2,
  Result3,
  Result4,
  Result5,
  Result6,
  Result7,
  Result8,
  Result9,
};

const Results = styled.div`
  background-color: black;
  display: grid;
  max-width: 100vw;
  min-height: 100vh;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Result1 = styled.div`
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

const GreenHosted = styled.p`
  font-weight: medium;
  color: green;
  padding-left: 30px;
  font-size: 8vw;
  transition: 1s;
`;

const Result2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  text-align: left;
  > div {
    font-weight: medium;
    padding-left: 30px;
    color: white;
    font-size: 2vw;
    line-height: 1vw;
  }
`;

const Result3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;

  > div {
    font-weight: medium;
    padding-left: 30px;
    font-size: 4vw;
    color: white;
  }
`;

const Result4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  > div {
    font-weight: medium;
    padding-left: 30px;
    font-size: 1vw;
    color: white;
  }
`;

const Result5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
`;

const Result6 = styled.div`
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

const Result7 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 3.4rem;
  font-weight: medium;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  color: white;
  > div {
    font-weight: medium;
    color: white;
    padding-left: 30px;
    font-size: 4vw;
    padding-left: 30px;
  }
`;
/* line height??? */

const Result8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
`;

const Result9 = styled.div`
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

import styled from 'styled-components';
export {
  Results,
  Result1,
  Result2,
  Result3,
  Result4,
  Result5,
  Result6,
  Result7,
  Result8,
  Result9,
  Result33,
  Result77,
};

const Results = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Result1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > div {
    padding: 30px 30px 30px 30px;
    letter-spacing: 0.03rem;
    font-size: 1.7rem;
    transition: 1s;
  }
  @media screen and (min-width: 700px) {
    grid-column: col-start / span 5;
    grid-row: 1 / 5;
    border-left: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
    border-right: none;
    > div {
      font-size: 3.2rem;
      padding: 60px 30px 30px 50px;
    }
  }
`;

const Result2 = styled.div`
  grid-column: col-start / span 3;
  grid-row: 5;
  border-left: 0.4vw solid var(--lightgreen);

  > div {
    padding: 15px 15px 15px 30px;
    letter-spacing: 0.03rem;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-top: none;
    border-right: 0.3vw solid var(--lightgreen);
    > div {
      padding: 30px 30px 30px 50px;
      font-size: 2rem;
    }
  }
`;

const Result3 = styled.div`
  grid-column: col-start 2 / span 4;
  grid-row: 6;
  height: 30vh;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  > div {
    padding: 10px 10px 10px 30px;
    letter-spacing: 0.03rem;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 700px) {
    grid-column: col-start 1 / span 4;
    border-left: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    > div {
      text-align: right;
      letter-spacing: 0.03rem;
      padding: 30px 30px 30px 50px;
      font-size: 1.7rem;
    }
  }
`;

const Result33 = styled.div`
  grid-column: col-start / span;
  grid-row: 6;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  height: 30vh;
  background-color: var(--lightgreen);
  opacity: 50%;
  @media screen and (min-width: 700px) {
    opacity: 100;
    background: none;
    border-left: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
  }
`;

const Result4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  > div {
    padding: 10px 30px 10px 30px;
    font-size: 1.3rem;
    letter-spacing: 0.03rem;
  }
  @media screen and (min-width: 700px) {
    grid-column: col-start / span 3;
    border-left: 0.3vw solid var(--lightgreen);
    border-top: none;
    border-right: 0.3vw solid var(--lightgreen);
    > div {
      letter-spacing: 0.03rem;
      padding: 30px 50px 30px 50px;
      font-size: 1.3rem;
    }
  }
`;

const Result5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5;
  border-left: 0.4vw solid var(--lightgreen);
  @media screen and (min-width: 700px) {
    grid-column: col-start 4 / span 2;
    grid-row: 5 / 10;
    border-left: none;
  }
`;

const Result6 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: 0.4vw solid var(--lightgreen);
  border-left: 0.4vw solid var(--lightgreen);
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    grid-row: 1 / 14;
    border-right: 0.3vw solid var(--lightgreen);
    border-left: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
  }
`;

const Result7 = styled.div`
  grid-column: col-start 2 / span 4;
  grid-row: 8 / 14;
  border-top: 0.4vw solid var(--lightgreen);
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > div {
    letter-spacing: 0.03rem;
    padding: 15px 30px 60px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    border-top: 0.3vw solid var(--lightgreen);
    border-left: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    border-right: none;
    > div {
      text-align: right;
      font-size: 2rem;
      padding: 10px 30px 30px 50px;
    }
  }
`;
const Result77 = styled.div`
  grid-column: col-start 1 / span;
  grid-row: 8 / 14;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  background: var(--purple-gradient-tb);
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
  }
`;

const Result8 = styled.div`
  grid-column: col-start 5;
  grid-row: 7 / 11;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  background-color: var(--lightgreen);
  opacity: 20%;
  @media screen and (min-width: 700px) {
    border-left: none;
    border-top: none;
    background: none;
  }
`;

const Result9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 11;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
  }
`;

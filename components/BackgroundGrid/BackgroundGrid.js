import styled from 'styled-components';
export {
  StyledBackgroundGrid,
  Area1,
  Area2,
  Area3,
  Area4,
  Area5,
  Area6,
  Area7,
  Area8,
  Area9,
  Area10,
  Area11,
};

const StyledBackgroundGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(15, [col-start]);
`;

const Area1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  > p {
    letter-spacing: 0.03rem;
    padding: 30px 30px 30px 30px;
    font-size: 1.7rem;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    grid-column: col-start / span 5;
    grid-row: 1 / 4;
    > p {
      padding: 60px 50px 50px 50px;
      font-size: 3.2rem;
    }
  }
`;

const Area2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  > div {
    padding: 30px 30px 15px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
    > div {
      padding: 30px 50px 20px 50px;
      font-size: 1.5rem;
    }
  }
`;

const Area3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  > div {
    padding-left: 30px;
    font-size: 4vw;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    > div {
      padding-left: 50px;
    }
  }
`;

const Area4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > p {
    font-weight: medium;
    padding: 5px 30px 10px 30px;
    font-size: 0.5rem;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    > p {
      padding: 25px 50px 25px 50px;
      font-size: 1rem;
    }
  }
`;

const Area5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-right: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  @media screen and (min-width: 700px) {
    border-right: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
  }
`;

const Area6 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    border-right: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
    background: none;
  }
`;

const Area7 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 3.4rem;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > p {
    padding: 30px 30px 30px 30px;
    letter-spacing: 0.01rem;
    font-size: 1.2rem;
    padding-left: 30px;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    > p {
      padding: 50px 50px 50px 50px;
      font-size: 2.7rem;
    }
  }
`;

const Area8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  @media screen and (min-width: 700px) {
    border-right: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
  }
`;

const Area9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    grid-column: col-start 6 / span 1;
    grid-row: 1 / 14;
    border-right: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
  }
`;

const Area10 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 14 / 15;
  height: 50px;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
  }
`;

const Area11 = styled.div`
  grid-column: col-start 5 / span 6;
  grid-row: 14 / 15;
  height: 50px;
  background-color: var(--lightgreen);
  opacity: 20%;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
  }
`;

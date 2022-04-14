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
};

const StyledBackgroundGrid = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Area1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  text-align: bottom;

  > p {
    letter-spacing: 0.03rem;
    padding: 30px 30px 30px 30px;
    font-size: 1.7rem;
    transition: 1s;
  }

  @media screen and (min-width: 700px) {
  }
  > div {
    padding: 100px 50px 100px 50px;
    font-size: 3.7rem;
  }

  @media screen and (min-width: 1500px) {
    > div {
      padding: 50px 50px 200px 50px;
      font-size: 8rem;
    }
  }
`;

const Area2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  text-align: left;
  > div {
    font-weight: medium;
    padding: 30px 30px 15px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding: 30px 50px 20px 50px;
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1500px) {
    > div {
      padding: 50px 50px 200px 50px;
      font-size: 3rem;
    }
  }
`;

const Area3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  border-left: 0.4vw solid var(--lightgreen);
  > div {
    font-weight: medium;
    padding-left: 30px;
    font-size: 4vw;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding-left: 50px;
    }
  }
  @media screen and (min-width: 1500px) {
    > div {
      padding: 0px 0px 0px 50px;
    }
  }
`;

const Area4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > p {
    font-weight: medium;
    padding: 5px 30px 10px 30px;
    font-size: 0.5rem;
  }
  @media screen and (min-width: 700px) {
    > p {
      padding: 25px 50px 25px 50px;
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1500px) {
    > p {
      padding: 50px 50px 200px 50px;
      font-size: 2rem;
    }
  }
`;

const Area5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
`;

const Area6 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: 0.4vw solid var(--lightgreen);
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
`;

const Area7 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 3.4rem;
  font-weight: medium;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > p {
    font-weight: medium;
    padding: 30px 30px 15px 30px;
    font-size: 1.5rem;
    padding-left: 30px;
  }
  @media screen and (min-width: 700px) {
    > p {
      padding: 50px 50px 100px 50px;
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 1500px) {
    > p {
      padding: 50px 50px 200px 50px;
      font-size: 6rem;
    }
  }
`;

const Area8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
`;

const Area9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 0) 0%,
    rgba(158, 51, 198, 0.7581233176864496) 100%
  );
`;

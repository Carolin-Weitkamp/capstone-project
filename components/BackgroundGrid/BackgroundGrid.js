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
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  > p {
    letter-spacing: 0.03rem;
    padding: 30px 30px 20px 30px;
    font-size: 1.7rem;
  }
  @media screen and (min-width: 700px) {
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
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  > div {
    padding: 30px 30px 10px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding: 30px 50px 20px 50px;
      font-size: 1.5rem;
    }
  }
`;

const Area3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  > div {
    padding-left: 30px;
    font-size: 4vw;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding-left: 50px;
    }
  }
`;

const Area4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  > p {
    font-weight: medium;
    padding: 0px 30px 0px 30px;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 700px) {
    > p {
      padding: 25px 50px 25px 50px;
      font-size: 1rem;
    }
  }
`;

const Area5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-right: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
`;

const Area6 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    background: none;
  }
`;

const Area7 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  > p {
    padding: 20px 30px 20px 30px;
    letter-spacing: 0.01rem;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 700px) {
    > p {
      padding: 50px 50px 50px 50px;
      font-size: 2.7rem;
    }
  }
`;

const Area8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
`;

const Area9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    grid-column: col-start 6 / span 1;
    grid-row: 1 / 14;
  }
`;

const Area10 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 14 / 15;
  background-color: var(--purple-gradient-rl);
  border-left: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
`;

const Area11 = styled.div`
  grid-column: col-start 5 / span 6;
  grid-row: 14 / 15;
  height: 100px;
  border-bottom: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
`;

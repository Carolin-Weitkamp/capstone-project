import styled from 'styled-components';
export { LoadingSide };

export default function LoadingSide() {
  return (
    <Loading>
      <Loading1>
        <div>Das Ergebnis lädt.</div>
      </Loading1>
      <Loading2>
        <div>Manchmal kann dies ein paar Sekunden länger dauern.</div>
      </Loading2>
      <Loading3 />
      <Loading4 />
      <Loading5 />
      <Loading6 />
      <Loading7 />
      <Loading8 />
      <Loading9 />
    </Loading>
  );
}

const Loading = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Loading1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  > div {
    padding: 30px 30px 30px 30px;
    font-size: 1.7rem;
    transition: 1s;
  }
  @media screen and (min-width: 700px) {
    grid-column: col-start / span 4;
    grid-row: 1 / 5;
    border-right: none;
    > div {
      padding: 100px 30px 50px 50px;
      font-size: 3.2rem;
    }
  }
`;

const Loading2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  text-align: left;
  > div {
    padding: 30px 30px 15px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding: 50px 50px 15px 50px;
      font-size: 2rem;
    }
  }
`;

const Loading3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  border-left: ${({ theme }) => theme.border};
`;

const Loading4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  border-left: ${({ theme }) => theme.border};
`;

const Loading5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  @media screen and (min-width: 700px) {
    grid-column: col-start 5 / span 1;
    grid-row: 1 / 14;
    background: var(--green-gradient-rl);
  }
`;

const Loading6 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    border-top: none;
    background: none;
  }
`;

const Loading7 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  border-left: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
`;

const Loading8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
`;

const Loading9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  background: var(--purple-gradient-rl);
  @media screen and (min-width: 700px) {
    grid-column: col-start 6 / span 1;
    grid-row: 1 / 14;
  }
`;

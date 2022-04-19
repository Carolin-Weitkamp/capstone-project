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
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Loading1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  text-align: bottom;

  > div {
    padding: 30px 30px 30px 30px;
    font-size: 1.7rem;
    transition: 1s;
  }
`;

const Loading2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  height: 15vh;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  text-align: left;
  > div {
    padding: 30px 30px 15px 30px;
    font-size: 1rem;
  }
`;

const Loading3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  height: 17.5vh;
  border-left: 0.4vw solid var(--lightgreen);

  > div {
    padding: 15px 30px 15px 30px;
    font-size: 1.2rem;
  }
`;

const Loading4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  height: 25vh;
  border-left: 0.4vw solid var(--lightgreen);
  /* border-top: 0.4vw solid var(--lightgreen); */
  /* border-bottom: 0.4vw solid var(--lightgreen); */
  > div {
    padding: 15px 30px 15px 30px;
    font-size: 1rem;
  }
`;

const Loading5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
`;

const Loading6 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: 0.4vw solid var(--lightgreen);
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  background: var(--purple-gradient-rl);
`;

const Loading7 = styled.div`
  margin-bottom: 58px;
  height: 25vh;
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 3.4rem;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
`;

const Loading8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
`;

const Loading9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  background: var(--purple-gradient-rl);
`;

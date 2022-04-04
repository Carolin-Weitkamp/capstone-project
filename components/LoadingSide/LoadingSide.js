import styled from 'styled-components';
export { LoadingSide };

function LoadingSide() {
  return (
    <Loading>
      <Loading1>
        <div>Das Ergebnis lädt.</div>
      </Loading1>
      <Loading2>
        <div>Manchmal kann dies ein paar Sekunden länger dauern.</div>
      </Loading2>
      <Loading3></Loading3>
      <Loading4></Loading4>
      <Loading5></Loading5>
      <Loading6></Loading6>
      <Loading7></Loading7>
      <Loading8></Loading8>
      <Loading9></Loading9>
    </Loading>
  );
}

export default LoadingSide;

const Loading = styled.div`
  background-color: black;
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Loading1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  height: 25vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  border-right: 0.35vw solid white;
  text-align: bottom;
  font-weight: medium;
  > div {
    font-weight: medium;
    color: white;
    padding: 30px 30px 30px 30px;
    font-size: 2.5rem;
    transition: 1s;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding: 50px 50px 100px 50px;
      font-size: 4rem;
    }
  }
  @media screen and (min-width: 1500px) {
    > div {
      padding: 50px 50px 200px 50px;
      font-size: 8rem;
    }
  }
`;

const Loading2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  height: 15vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  text-align: left;
  > div {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding: 50px 50px 25px 50px;
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

const Loading3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6;
  height: 17.5vh;
  border-left: 0.35vw solid white;
  /* border-top: 0.35vw solid white; */

  > div {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1.2rem;
  }
  /* @media screen and (min-width: 700px) {
    > div {
      padding-left: 50px;
    }
  }
  @media screen and (min-width: 1500px) {
    > div {
      padding: 0px 0px 0px 50px;
    }
  } */
`;

const Loading4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 7;
  height: 17.5vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  > div {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
  /* @media screen and (min-width: 700px) {
    > div {
      padding: 25px 50px 25px 50px;
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1500px) {
    > div {
      padding: 50px 50px 200px 50px;
      font-size: 2rem;
    }
  } */
`;

const Loading5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
`;

const Loading6 = styled.div`
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

const Loading7 = styled.div`
  margin-bottom: 58px;
  height: 25vh;
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 3.4rem;
  font-weight: medium;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  color: white;
  /* > div {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    > div {
      padding: 50px 50px 100px 50px;
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1500px) {
    > div {
      padding: 50px 50px 200px 50px;
      font-size: 6rem;
    }
  } */
`;

const Loading8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
`;

const Loading9 = styled.div`
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

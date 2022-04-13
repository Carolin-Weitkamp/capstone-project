import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import footprint from '/public/pictures/footprint.svg';
import { StyledCalculatorButton } from '../components/CheckButton/CalculatorButton';
import { StyledGreenHostsButton } from '../components/CheckButton/GreenHostsButton';

export default function Landingpage() {
  return (
    <Landing>
      <Landing1>
        <p>Wie ist der CO2-Fußabdruck deiner Website?</p>
      </Landing1>
      <Landing2>
        <Link href="/calculator" passHref>
          <StyledCalculatorButton>Zum Rechner</StyledCalculatorButton>
        </Link>
        <p>Ein Tool das deine Website untersucht...</p>
      </Landing2>
      <Landing3>
        <Link href="/green-hosts" passHref>
          <StyledGreenHostsButton>Grünes Hosting</StyledGreenHostsButton>
        </Link>
        <p>Hier findest du eine Liste grüner Hosting-Anbieter.</p>
      </Landing3>
      <Landing4>
        <PictureStyle>
          <Image src={footprint} alt={'ein gelber Fuss'} />
        </PictureStyle>
      </Landing4>
      <Landing6 />
      <Landing7 />
      <Landing8 />
      <Landing9 />
    </Landing>
  );
}

const Landing = styled.div`
  background-color: black;
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 0%,
    rgba(84, 48, 173, 1) 100%
  );
`;

const Landing1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1 / 5;
  height: 25vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  border-right: 0.35vw solid white;
  text-align: bottom;
  font-weight: medium;
  > p {
    font-weight: medium;
    color: white;
    padding: 30px 30px 30px 30px;
    font-size: 1.5rem;
    transition: 1s;
  }
`;

const Landing2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6 / 7;
  height: 10vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  text-align: left;
  > p {
    font-weight: medium;
    padding: 0px 30px 30px 30px;
    color: white;
    font-size: 0.3rem;
  }
`;

const Landing3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 9;
  height: 10vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;

  > p {
    font-weight: medium;
    padding: 0px 30px 35px 30px;
    color: white;
    font-size: 0.3rem;
  }
`;

const Landing4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 10 / 14;
  height: 50vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
`;
// const Landing5 = styled.div`
//   margin-bottom: 58px;
//   height: 25vh;
//   grid-column: col-start / span 4;
//   grid-row: 8 / 14;
//   font-weight: medium;
//   border-left: 0.35vw solid white;
//   border-bottom: 0.35vw solid white;
//   border-top: 0.35vw solid white;
//   color: white;
//   > p {
//     font-weight: medium;
//     padding: 15px 30px 15px 30px;
//     color: white;
//     font-size: 0.5rem;
//   }
// `;

const Landing6 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  > p {
    color: white;
  }
`;

const Landing7 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  > p {
    color: white;
  }
`;

const Landing8 = styled.div`
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

const Landing9 = styled.div`
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

const PictureStyle = styled.div`
  height: 30vh;
  width: 50vw;
  padding: 10px 10px 0px 0px;
`;

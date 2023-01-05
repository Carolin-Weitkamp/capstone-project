import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import footprintgreen from '/public/pictures/footprintgreen.svg';
import footprintpurple from '/public/pictures/footprintpurple.svg';
import { StyledCalculatorButton } from '../components/CheckButton/CalculatorButton';
import { StyledGreenHostsButton } from '../components/CheckButton/GreenHostsButton';

export default function Landingpage({ toggleButton }) {
  return (
    <Landing>
      {/* <hr></hr> */}
      <LandingLogo>
        <p>TEST</p>
      </LandingLogo>
      <Landing1>
        <p>Wie groß ist der CO2-Fußabdruck deiner Website?</p>
      </Landing1>
      <Landing2>
        <Link href="/calculator" passHref>
          <StyledCalculatorButton>Zum Rechner</StyledCalculatorButton>
        </Link>
        <p>Ein Tool das deine Website auf Nachhaltigkeit untersucht.</p>
      </Landing2>
      <Landing3>
        <Link href="/green-hosts" passHref>
          <StyledGreenHostsButton>Grünes Hosting</StyledGreenHostsButton>
        </Link>
        <p>Eine Liste grüner Hosting-Anbieter sortiert nach Ländern.</p>
      </Landing3>
      <Landing4>
        <PictureStyle>
          {toggleButton === false ? (
            <Image src={footprintpurple} alt={'lila Fuß'} />
          ) : (
            <Image src={footprintgreen} alt={'grüner Fuß'} />
          )}
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
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);

  /* > hr {
    color: hotpink;
    opacity: 0.5;
    height: 100%;
    width: 0;
    margin-left: 30px;
    position: fixed;
  } */
`;

const LandingLogo = styled.div`
  grid-column: col-start / span 6;
  grid-row: 1;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
`;

const Landing1 = styled.div`
  grid-column: col-start / span 6;
  grid-row: 2 / 5;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};

  > p {
    letter-spacing: 0.03rem;
    padding: 10px 30px 30px 30px;
    font-size: 1.7rem;
    transition: 1s;
  }

  @media screen and (min-width: 700px) {
    > p {
      font-size: 3.2rem;
      padding: 60px 30px 30px 50px;
    }
  }
`;

const Landing2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 6 / 7;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  > p {
    padding: 0px 30px 5px 30px;
    margin-bottom: 3;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 700px) {
    > p {
      font-size: 0.9rem;
      padding: 0px 30px 5px 50px;
    }
  }
`;

const Landing3 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 8 / 9;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  > p {
    padding: 0px 30px 5px 30px;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 700px) {
    > p {
      font-size: 0.9rem;
      padding: 0px 30px 5px 50px;
    }
  }
`;

const Landing4 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 10 / 14;
  height: 50vh;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  > p {
    padding: 15px 30px 15px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    > p {
      padding: 15px 30px 15px 50px;
      font-size: 2rem;
    }
  }
`;

const Landing6 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
`;

const Landing7 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
`;

const Landing8 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 14;
  border-right: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  background: var(--purple-gradient-rl);
`;

const Landing9 = styled.div`
  grid-column: col-start 6 / span 1;
  /* grid-row: 8 / 14; */
  border-left: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  background: var(--purple-gradient-rl);
`;

const PictureStyle = styled.div`
  height: 40vh;
  padding: 30px 30px 0px 0px;
`;

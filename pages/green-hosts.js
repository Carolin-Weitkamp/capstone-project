import styled from 'styled-components';
import useSWR from 'swr';
import { useState } from 'react';
import InputFieldCountry from '../components/InputFieldCountry/inputFieldCountry';
import NavBar from '../components/NavBar/NavBar';

export default function GreenHosts() {
  const { data: countries } = useSWR(`/api/greenhosts`);
  const [selectedCountry, setSelectedCountry] = useState();

  const countryArray =
    countries &&
    Object.values(countries).filter(
      country => country.providers && country.providers.length > 0
    );
  return (
    <Hosts>
      <Hosts1>
        <p>Such hier nach einem grünen Hosting-Anbieter:</p>
      </Hosts1>
      <Hosts2>
        {countryArray ? (
          <>
            <InputFieldCountry
              countryArray={countryArray}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
            <p>
              Liste der grünen <br></br> Hosting-Anbieter:
              <ul>
                {countries[selectedCountry]?.providers.map(provider => (
                  <li key={provider.id}>
                    <a href={provider.website}>{provider.naam}</a>
                  </li>
                ))}
              </ul>
            </p>
          </>
        ) : null}
      </Hosts2>
      <Hosts3>{/* <p>hallo 3</p> */}</Hosts3>
      <Hosts4>{/* <p>hallo 4</p> */}</Hosts4>
      <Hosts6>{/* <p>hallo 6</p> */}</Hosts6>
      <Hosts8>{/* <p>hallo 8</p> */}</Hosts8>
      <Hosts5>
        <p>Erhebt keinen Anspruch auf Vollständigkeit.</p>
      </Hosts5>
      <Hosts7>{/* <p>hallo 7</p> */}</Hosts7>
      <Hosts9>{/* <p>hallo 9</p> */}</Hosts9>
      <NavBar></NavBar>
    </Hosts>
  );
}

const Hosts = styled.div`
  background-color: black;
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Hosts1 = styled.div`
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

const Hosts2 = styled.div`
  grid-column: col-start / span 5;
  grid-row: 5;
  height: 15vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  /* border-right: 0.35vw solid white; */
  /* border-bottom: 0.35vw solid white; */
  text-align: left;
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 0.8rem;
  }
`;

const Hosts3 = styled.div`
  grid-column: col-start / span 5;
  grid-row: 6;
  height: 17.5vh;
  border-left: 0.35vw solid white;
  /* border-top: 0.35vw solid white; */

  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
`;

const Hosts4 = styled.div`
  grid-column: col-start / span 5;
  grid-row: 7;
  height: 17.5vh;
  border-left: 0.35vw solid white;
  /* border-top: 0.35vw solid white; */
  border-bottom: 0.35vw solid white;
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
`;

const Hosts5 = styled.div`
  margin-bottom: 58px;
  height: 25vh;
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 1rem;
  font-weight: medium;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  color: white;
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 0.5rem;
  }
`;

const Hosts6 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  /* border-left: 0.35vw solid white; */
  border-top: 0.35vw solid white;
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
`;
const Hosts7 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
`;

const Hosts8 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: 0.35vw solid white;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  background: linear-gradient(
    90deg,
    rgba(80, 16, 85, 0) 0%,
    rgba(93, 172, 15, 0.5928572112438726) 100%
  );
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 1rem;
  }
`;

const Hosts9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-right: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
  background: linear-gradient(
    90deg,
    rgba(80, 16, 85, 0) 0%,
    rgba(93, 172, 15, 0.5928572112438726) 100%
  );
`;

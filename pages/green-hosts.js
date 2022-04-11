import styled from 'styled-components';
import useSWR from 'swr';
import { useState } from 'react';
import InputFieldCountry from '../components/InputFieldCountry/inputFieldCountry';

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
              Liste der grünen Hosting-Anbieter:
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
      <Hosts3></Hosts3>
      <Hosts4></Hosts4>
      <Hosts5></Hosts5>
      <Hosts6></Hosts6>
      <Hosts7></Hosts7>
      <Hosts8></Hosts8>
      <Hosts9></Hosts9>
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

const Hosts2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5;
  height: 15vh;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
  text-align: left;
  > p {
    font-weight: medium;
    padding: 15px 30px 15px 30px;
    color: white;
    font-size: 2rem;
  }
  > li {
    list-style: none;
    color: white;
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

const Hosts3 = styled.div`
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

const Hosts4 = styled.div`
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

const Hosts5 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-left: 0.35vw solid white;
  border-top: 0.35vw solid white;
`;

const Hosts6 = styled.div`
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

const Hosts7 = styled.div`
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

const Hosts8 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  border-left: 0.35vw solid white;
  border-bottom: 0.35vw solid white;
`;

const Hosts9 = styled.div`
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

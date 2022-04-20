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
              Grüne Hosting-Anbieter:
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
      <Hosts8 />
      <Hosts7>
        <p>Diese Auflistung erhebt keinen Anspruch auf Vollständigkeit.</p>
      </Hosts7>
    </Hosts>
  );
}

const Hosts = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Hosts1 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 1 / 5;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  > p {
    letter-spacing: 0.03rem;
    padding: 30px 30px 30px 30px;
    font-size: 1.7rem;
    transition: 1s;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-top: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    > p {
      font-size: 3.2rem;
      padding: 60px 30px 10px 50px;
    }
  }
`;

const Hosts2 = styled.div`
  grid-column: col-start / span 4;
  grid-row: 5 / 14;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  text-align: left;
  > p {
    letter-spacing: 0.05rem;
    padding: 15px 30px 15px 30px;
    font-size: 0.8rem;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    > p {
      font-size: 1.5rem;
      padding: 0px 30px 5px 50px;
    }
  }
`;

const Hosts7 = styled.div`
  grid-column: col-start 5 / span 2;
  grid-row: 10 / 14;
  border-top: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > p {
    padding: 15px 15px 60px 15px;
    font-size: 0.5rem;
  }
  @media screen and (min-width: 700px) {
    border-top: 0.3vw solid var(--lightgreen);
    border-right: 0.3vw solid var(--lightgreen);
    border-bottom: 0.3vw solid var(--lightgreen);
    > p {
      padding: 30px 30px 60px 30px;
      font-size: 1rem;
    }
  }
`;

const Hosts8 = styled.div`
  grid-column: col-start 5 / span 2;
  grid-row: 1 / 10;
  border-right: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  background: var(--green-gradient-rl);
  @media screen and (min-width: 700px) {
    grid-column: col-start 1 / span 0;
    grid-row: 1 / 10;
  }
`;

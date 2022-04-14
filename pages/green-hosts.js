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
      <Hosts3 />
      <Hosts4 />
      <Hosts6 />
      <Hosts8 />
      <Hosts5>
        <p>Erhebt keinen Anspruch auf Vollständigkeit.</p>
      </Hosts5>
      <Hosts7 />
      <Hosts9 />
    </Hosts>
  );
}

const Hosts = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(14, [col-start]);
`;

const Hosts1 = styled.div`
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
    grid-column: col-start / span 5;
  }
`;

const Hosts2 = styled.div`
  grid-column: col-start / span 5;
  grid-row: 5;
  height: 15vh;
  border-left: 0.4vw solid var(--lightgreen);
  border-top: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  text-align: left;
  > p {
    letter-spacing: 0.05rem;
    padding: 15px 30px 15px 30px;
    font-size: 0.8rem;
  }
  > ul {
    color: hotpink;
    list-style: none;
  }
  > li {
    list-style: none;
  }
`;

const Hosts3 = styled.div`
  grid-column: col-start / span 5;
  grid-row: 6;
  height: 17.5vh;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);

  > p {
    padding: 15px 30px 15px 30px;
    font-size: 1rem;
  }
`;

const Hosts4 = styled.div`
  grid-column: col-start / span 5;
  grid-row: 7;
  height: 17.5vh;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  > p {
    padding: 15px 30px 15px 30px;
    font-size: 1rem;
  }
`;

const Hosts5 = styled.div`
  margin-bottom: 58px;
  height: 25vh;
  grid-column: col-start / span 4;
  grid-row: 8 / 14;
  font-size: 1rem;
  border-left: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > p {
    padding: 15px 30px 15px 30px;
    font-size: 0.5rem;
  }
`;

const Hosts6 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 5 / 8;
  border-top: 0.4vw solid var(--lightgreen);

  > p {
    padding: 15px 30px 15px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    border-left: 0.4vw solid var(--lightgreen);
  }
`;
const Hosts7 = styled.div`
  grid-column: col-start 5 / span 1;
  grid-row: 8 / 14;
  gap: 1vw;
  border-left: 0.4vw solid var(--lightgreen);
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  > p {
    padding: 15px 30px 15px 30px;
    font-size: 1rem;
  }
`;

const Hosts8 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 5 / 8;
  border-right: 0.4vw solid var(--lightgreen);
  /* border-left: 0.4vw solid var(--lightgreen); */
  border-top: 0.4vw solid var(--lightgreen);
  background: var(--green-gradient-rl);

  > p {
    padding: 15px 30px 15px 30px;
    font-size: 1rem;
  }
  @media screen and (min-width: 700px) {
    grid-column: col-start 1 / span 0;
    /* grid-column: col-start 0; */
    grid-row: 5 / 8;
    background: var(--green-gradient-rl);
  }
`;

const Hosts9 = styled.div`
  grid-column: col-start 6 / span 1;
  grid-row: 8 / 14;
  /* border-left: 0.4vw solid var(--lightgreen); */
  border-right: 0.4vw solid var(--lightgreen);
  border-bottom: 0.4vw solid var(--lightgreen);
  background: var(--green-gradient-rl);
`;

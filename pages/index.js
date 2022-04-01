import Head from 'next/head';
import styled from 'styled-components';
import { StyledCheckButton } from '../components/CheckButton/CheckButton';
import {
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
} from '../components/BackgroundGrid/BackgroundGrid';
import {
  Results,
  Result1,
  Result2,
  Result3,
  Result4,
  Result5,
  Result6,
  Result7,
  Result8,
  Result9,
} from '../components/Results/Results';
import { StyledInput } from '../components/InputFieldUrl/InputUrl';
import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function Home({}) {
  const router = useRouter();
  const url = router.query.url; // url? if not url
  const { data } = useSWR(`/api/carbon?url=${encodeURIComponent(url)}`, {
    isPaused: () => !url,
  });
  console.log(data);
  function handleSubmit(event) {
    event.preventDefault();
    const newUrl = event.target.elements.urlInput.value;
    router.push({
      pathname: router.pathname, // auf diese Pfad wird weitergeleitet
      query: { url: newUrl }, // und das ist die url die eingegeben wird
    });
  }

  if (!url) {
    return (
      <form onSubmit={handleSubmit}>
        <StyledBackgroundGrid>
          <Area1>
            <div>Wie grün ist deine Website?</div>
          </Area1>
          <Area2>
            <div>Wenn du es wissen willst, tippe hier deine Url ein:</div>
          </Area2>
          <Area3>
            <div>
              <StyledInput name="urlInput" type="text" required></StyledInput>
              <StyledCheckButton type="submit">CHECK</StyledCheckButton>
            </div>
          </Area3>
          <Area4>
            <p>Anhand von Parametern. blablabla</p>
          </Area4>
          <Area5></Area5>
          <Area6></Area6>
          <Area7>
            <p>
              Dieses Tool gibt dir einen Überblick wie umweltfreundlich deine
              Website ist.
            </p>
          </Area7>
          <Area8></Area8>
          <Area9></Area9>
        </StyledBackgroundGrid>
      </form>
    );
  }

  return (
    <>
      <Head>
        <title>Carbon Footprint</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌏</text></svg>"
        ></link>
      </Head>

      <Results>
        <Result1>
          {data ? (
            <div>
              {data.green === true ? (
                <p style={{ color: 'green' }}>
                  diese Webseite wird grün gehostet
                </p>
              ) : (
                <p>diese Webseite wird nicht grün gehostet</p>
              )}
            </div>
          ) : null}
        </Result1>
        <Result2>
          {data ? (
            <div>
              {data.cleanerThan > 0.5 ? (
                <p> zählt zu den 50% der sauberen Websites</p>
              ) : (
                <p>zählt zu den 50% der dreckigen Website</p>
              )}
            </div>
          ) : null}
        </Result2>
        <Result3>
          {data ? (
            <div>
              <p>
                beim Laden der Webseite werden {data.bytes} Bytes übertragenen.
              </p>
            </div>
          ) : null}
        </Result3>
        <Result4>
          {data ? (
            <div>
              <p>Verbrauchte Liter: {data.statistics.co2.grid.litres}</p>
            </div>
          ) : null}
        </Result4>
        <Result5></Result5>
        <Result6></Result6>
        <Result7>
          {data ? (
            <div>
              <p>
                Die Seite verbraucht ungefähr{data.statistics.co2.grid.grams}
                Gramm CO2 bei jedem Ladevorgang
              </p>
            </div>
          ) : null}
        </Result7>
        <Result8></Result8>
        <Result9></Result9>
      </Results>
    </>
  );
}

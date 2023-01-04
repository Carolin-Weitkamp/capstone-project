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
  Area10,
  Area11,
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
  Result33,
  Result77,
} from '../components/Results/Results';
import { StyledInput } from '../components/InputFieldUrl/InputUrl';
import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import LoadingSide from '../components/LoadingSide/LoadingSide';
import Link from 'next/link';

export default function Home({}) {
  const router = useRouter();
  const url = router.query.url;
  const { data } = useSWR(`/api/carbon?url=${encodeURIComponent(url)}`, {
    isPaused: () => !url,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const newUrl = event.target.elements.urlInput.value;
    router.push({
      pathname: router.pathname,
      query: { url: newUrl },
    });
  }

  if (!url) {
    return (
      <form onSubmit={handleSubmit}>
        <StyledBackgroundGrid>
          <Area1>
            <p>Wie grün ist deine Website?</p>
          </Area1>
          <Area2>
            <div>Wenn du es wissen willst, tippe hier deine Url ein:</div>
          </Area2>
          <Area3>
            <div>
              <StyledInput name="urlInput" type="text" required></StyledInput>
            </div>
            <div>
              <StyledCheckButton type="submit">CHECK</StyledCheckButton>
            </div>
          </Area3>
          <Area4>
            <p>Wie wird berechnet? Erfahre mehr.</p>
          </Area4>
          <Area5 />
          <Area6 />
          <Area7>
            <p>
              Dieses Rechner gibt einen Überblick wie umweltfreundlich deine
              Website ist.
            </p>
          </Area7>
          <Area8 />
          <Area9 />
          <Area10 />
          <Area11 />
        </StyledBackgroundGrid>
      </form>
    );
  }

  if (!data) {
    return (
      <>
        <LoadingSide />
      </>
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
                <p style={{ color: 'rgba(173, 255, 0, 1)' }}>
                  Diese Webseite wird bereits grün gehostet.
                </p>
              ) : (
                <div>
                  <p>Diese Webseite wird nicht grün gehostet.</p>
                  <Link href="/green-hosts" passHref>
                    <StyledCheckButton>Zu grün wechseln!</StyledCheckButton>
                  </Link>
                </div>
              )}
            </div>
          ) : null}
        </Result1>
        <Result2>
          {data ? (
            <div>
              {data.cleanerThan > 0.5 ? (
                <p>
                  Sie ist sauberer als {data.cleanerThan * 100}% der bereits
                  berechneten Websites.
                </p>
              ) : (
                <p>
                  Sie ist dreckiger als{' '}
                  {(1 - data.cleanerThan).toFixed(2) * 100}% der bereits
                  berechneten Websites.
                </p>
              )}
            </div>
          ) : null}
        </Result2>
        <Result3>
          {data ? (
            <div>
              <p>
                Beim Laden der Webseite werden {data.bytes.toFixed(2)} Bytes
                übertragenen.
              </p>
            </div>
          ) : null}
        </Result3>
        <Result33 />
        <Result4>
          {data ? (
            <div>
              <p>
                Und es werden ungefähr{' '}
                {data.statistics.co2.grid.litres.toFixed(2)} Liter Wasser
                verbraucht.
              </p>
            </div>
          ) : null}
        </Result4>
        <Result5 />
        <Result6 />
        <Result7>
          {data ? (
            <div>
              <p>
                Insgesamt werden somit{' '}
                {data.statistics.co2.grid.grams.toFixed(2)} Gramm CO2 bei jedem
                Ladevorgang der Website emittiert.
              </p>
            </div>
          ) : null}
        </Result7>
        <Result77 />
        <Result8 />
        <Result9 />
      </Results>
    </>
  );
}

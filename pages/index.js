import Head from 'next/head';
import styled from 'styled-components';
import { StyledCheckButton } from '../components/CheckButton/CheckButton';
import {
  StyledBackgroundGrid,
  StyledTextfield1,
  StyledTextfield2,
  StyledTextField21,
  StyledTextField22,
  StyledTextfield3,
  Area1,
  Area2,
  Area4,
  Area3,
} from '../components/BackgroundGrid/BackgroundGrid';
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
          <StyledTextfield1>
            <div>Wie grün ist deine Website?</div>
          </StyledTextfield1>
          <StyledTextfield2>
            <div>Wenn du es wissen willst, tippe hier deine Url ein:</div>
          </StyledTextfield2>
          <StyledTextField21>
            <StyledInput name="urlInput" type="text" required></StyledInput>
            <StyledCheckButton type="submit">CHECK</StyledCheckButton>
          </StyledTextField21>
          <StyledTextField22>
            <p>Anhand von Parametern. blablabla</p>
          </StyledTextField22>
          <Area1></Area1>
          <Area2></Area2>
          <StyledTextfield3>
            <p>
              Dieses Tool gibt dir einen Überblick wie umweltfreundlich deine
              Website ist.
            </p>
          </StyledTextfield3>
          <Area3></Area3>
          <Area4></Area4>
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

      <StyledBackgroundGrid>
        <StyledTextfield1>
          {data ? (
            <div>
              {data.green === true ? (
                <p>diese Webseite wird grün gehostet</p>
              ) : (
                <p>diese Webseite wird nicht grün gehostet</p>
              )}
            </div>
          ) : null}
        </StyledTextfield1>
        <StyledTextfield2>
          {data ? (
            <div>
              {data.cleanerThan > 0.5 ? (
                <p> zählt zu den 50% der sauberen Websites</p>
              ) : (
                <p>zählt zu den 50% der dreckigen Website</p>
              )}
            </div>
          ) : null}
        </StyledTextfield2>
        <StyledTextField21>
          {data ? (
            <div>
              <p>
                beim Laden der Webseite werden {data.bytes} Bytes übertragenen.
              </p>
            </div>
          ) : null}
        </StyledTextField21>
        <StyledTextField22>
          <p>Nutzungshinweise / Verarbeitungshinweise</p>
        </StyledTextField22>
        <Area1></Area1>
        <Area2></Area2>
        <StyledTextfield3>
          {data ? (
            <div>
              <p>
                Die Seite verbraucht ungefähr {data.statistics.co2.grid.grams}{' '}
                Gramm CO2 bei jedem Ladevorgang
              </p>
            </div>
          ) : null}
        </StyledTextfield3>
        <Area3></Area3>
        <Area4></Area4>
      </StyledBackgroundGrid>
    </>
  );
}

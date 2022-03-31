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
        <StyledInput name="urlInput" type="text" required></StyledInput>
        <StyledCheckButton type="submit">CHECK</StyledCheckButton>
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
                <p>die Website green</p>
              ) : (
                <p>Is not green</p>
              )}
            </div>
          ) : null}
        </StyledTextfield1>
        <StyledTextfield2>
          {data ? <p>Type in your URL: {data.url} </p> : null}
        </StyledTextfield2>
        <StyledTextField21>
          <form onSubmit={handleSubmit}>
            <StyledInput name="urlInput" type="text" required></StyledInput>
            <StyledCheckButton type="submit">CHECK</StyledCheckButton>
          </form>
        </StyledTextField21>
        <StyledTextField22>
          <p>Nutzungshinweise / Verarbeitungshinweise</p>
        </StyledTextField22>
        <Area1></Area1>
        <Area2></Area2>
        <StyledTextfield3>
          <p>Estimates the carbon footprint of your website.</p>
        </StyledTextfield3>
        <Area3></Area3>
        <Area4></Area4>
      </StyledBackgroundGrid>
    </>
  );
}

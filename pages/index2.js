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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    'https://api.websitecarbon.com/site?url=https%3A%2F%2Fwww.wholegraindigital.com'
  );
  const data = await res.json();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } };
}

export default function Home({ data }) {
  console.log(data);
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
          <p>Deine Website wird //{data.green} mit grüner Energie gehostet</p>
        </StyledTextfield1>
        <StyledTextfield2>
          <p>
            Und sie ist sauberer als {data.cleanerThan} % der bereits getesteten
            Websites
          </p>
        </StyledTextfield2>
        <StyledTextField21>
          <StyledInput>{data.url}</StyledInput>
        </StyledTextField21>
        <StyledTextField22>
          <StyledCheckButton>CHECK</StyledCheckButton>
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

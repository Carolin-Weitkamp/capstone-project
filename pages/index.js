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

export default function Home() {
  return (
    <>
      <Head>
        <title> Carbon Footprint </title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌏</text></svg>"
        ></link>{' '}
      </Head>

      <StyledBackgroundGrid>
        <StyledTextfield1>
          <p>How ecofriendly is your Website?</p>
        </StyledTextfield1>
        <StyledTextfield2>
          <p> Was geschieht hier? </p>
        </StyledTextfield2>
        <StyledTextField21>
          <input></input>
        </StyledTextField21>
        <StyledTextField22>
          <p>Estimates the carbon footprint of your website. </p>
        </StyledTextField22>
        <Area1></Area1>
        <Area2></Area2>
        <StyledTextfield3>
          <p> was geht hier ab?</p>
        </StyledTextfield3>
        <Area3></Area3>
        <Area4></Area4>
      </StyledBackgroundGrid>
    </>
  );
}

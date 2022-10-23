import React from "react";
import styled, { css } from "styled-components";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Margin from "../components/Margin";

import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";

import ImageTitle from "../public/wanted.png";
import ImageInhaclueText1 from "../public/inhaclue_text1.png";
import ImageInhaclueText2 from "../public/inhaclue_text2.png";
import ImageInhaClueNull from "../public/inhaclue_null.png";
import ImageInhaDate from "../public/inha_date.png";
import ImageIhaborText from "../public/inhabor_text.png";
import ImageInhaborLogo from "../public/inhabor_logo.png";

import ImageClue1 from "../public/clue_sample1.png";
import ImageClue2 from "../public/clue_sample2.png";
import ImageClue3 from "../public/clue_sample3.png";
import ImageClue4 from "../public/clue_sample4.png";
import ImageClue5 from "../public/clue_sample5.png";
import ImageClue6 from "../public/clue_sample6.png";
import ImageClue7 from "../public/clue_sample7.png";
import ImageClue8 from "../public/clue_sample8.png";
import ImageClue9 from "../public/clue_sample9.png";
import ImageClue10 from "../public/clue_sample10.png";

import Carousel from "nuka-carousel";

const BackGround = styled.div`
  top: 0;
  width: 100%;
  height: 1400px;
  text-align: center;
  margin: auto;
  background-color: #000;
  position: relative;
`;

const StyledTitle = styled(Image)`
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledInhaclueText1 = styled(Image)`
  top: -32px;
  size: 70%;
`;

const StyledInhaclueText2 = styled(Image)`
  top: -32px;
  size: 70%;
`;

const StyledInhaclueNull = styled(Image)`
  position: relative;
  top: 20px;
  left: 0;
  z-index: -1;
`;

const StyledClueImg1 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg2 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg3 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg4 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg5 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg6 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg7 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg8 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg9 = styled(Image)`
position: relative
  text-align: center;
`;
const StyledClueImg10 = styled(Image)`
position: relative
  text-align: center;
`;

const StyledInhaDate = styled(Image)`
  width: 100%;
  height: 100%;
`;
const StyledInhaborText = styled(Image)`
  width: 100%;
  height: 100%;
`;
const StyledInhaborLogo = styled(Image)`
  weight: 60%;
  height: 60%;
`;

export default function Start() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://inhabor-wanted.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="인하대학교 여론조사" />
        <meta
          property="og:description"
          content="WANTED! 찾습니다. 그리고 원합니다. 개발자 : 인하대학교 총대의원회 집행국 선전편집국 국장 김현조 (Mei)"
        />
        <meta property="og:image" content="/public/og_poster.png" />
      </Head>

      <BackGround>
        <Margin size="12" />
        <Fade top>
          <StyledTitle src={ImageTitle} />
        </Fade>
        <Fade>
          <StyledInhaclueText1 src={ImageInhaclueText1} />
        </Fade>
        <Margin size="48" />

        <div>
          <Carousel wrapAround={true} slidesToShow={3}>
            <StyledClueImg1 src={ImageClue1} width={320} height={380} />
            <StyledClueImg2 src={ImageClue2} width={320} height={380} />
            <StyledClueImg3 src={ImageClue3} width={320} height={380} />
            <StyledClueImg4 src={ImageClue4} width={320} height={380} />
            <StyledClueImg5 src={ImageClue5} width={320} height={380} />
            <StyledClueImg6 src={ImageClue6} width={320} height={380} />
            <StyledClueImg7 src={ImageClue7} width={320} height={380} />
            <StyledClueImg8 src={ImageClue8} width={320} height={380} />
            <StyledClueImg9 src={ImageClue9} width={320} height={380} />
            <StyledClueImg10 src={ImageClue10} width={320} height={380} />
          </Carousel>
        </div>
        <Margin size="80" />
        <Fade>
          <StyledInhaclueText2 src={ImageInhaclueText2} />
        </Fade>
        <Margin size="48" />
        <Fade top>
          <StyledInhaclueNull src={ImageInhaClueNull} />
        </Fade>
        <Margin size="32" />
        <Fade top>
          <StyledInhaDate src={ImageInhaDate} />
        </Fade>
        <Margin size="48" />
        <StyledInhaborText src={ImageIhaborText} />
        <Margin size="48" />
        <Tada>
          <Link href="https://www.instagram.com/inhabor_13/">
            <StyledInhaborLogo
              src={ImageInhaborLogo}
              width={100}
              height={100}
            />
          </Link>
        </Tada>
      </BackGround>
    </>
  );
}

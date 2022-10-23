import React from "react";
import styled, { css } from "styled-components";

import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import Margin from "../components/Margin";
import Modal from "../components/Modal";
import Text from "../components/Text";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import Tada from "react-reveal/Tada";

import Image from "next/image";
import ImageTitle from "../public/wanted.png";
import ImageTitleText from "../public/wanted_text.png";
import ImageOldImg from "../public/oldpaper_bg.png";
import ImageInhaTitle from "../public/inha_title.png";
import ImageInhaDate from "../public/inha_date.png";
import ImageInhaClue from "../public/inhaclue_main.png";
import ImageWantedLogo from "../public/wanted_logo.png";
import ImageIhaborText from "../public/inhabor_text.png";
import Image1stResult from "../public/1st_result.png";
import ImageInhaborLogo from "../public/inhabor_logo.png";

const BackGround = styled.div`
  top: 0;
  width: 100%;
  height: 3400px;
  text-align: center;
  margin: auto;
  background-color: #000;
`;

const StyledLayout = styled(Layout)`
  min-height: 550px;
`;

const StyledTitle = styled(Image)`
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledTitleText = styled(Image)`
  top: -32px;
  size: 70%;
`;

const StyledOldPaper = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StyledInhaTitle = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StyledInhaDate = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StyledInhaClue = styled(Image)`
  animation-duration: 2s;
`;

const StyledWantedLogo = styled(Image)`
  width: 40%;
  height: 40%;
`;

const StyledInhaborText = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Styled1stResult = styled(Image)`
  weight: 100%;
  height: 100%;
`;

const StyledInhaborLogo = styled(Image)`
  weight: 60%;
  height: 60%;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  font-weight: 400;
  margin: auto;
  text-align: center;
  line-height: 1.6;
`;

export default function Start() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="인하대학교 여론조사" />
        <meta
          property="og:description"
          content="WANTED! 찾습니다. 그리고 원합니다. 개발자 : 인하대학교 총대의원회 집행국 선전편집국 국장 김현조 (Mei)"
        />
        <meta property="og:image" content="" />
      </Head>

      <BackGround>
        <Margin size="32" />
        <Fade top>
          <StyledTitle src={ImageTitle} />
        </Fade>
        <Fade>
          <StyledTitleText src={ImageTitleText} />
        </Fade>
        <Margin size="32" />
        <Slide top>
          <StyledOldPaper src={ImageOldImg} />
        </Slide>

        <Margin size="32" />
        <Slide top>
          <StyledInhaTitle src={ImageInhaTitle} />
        </Slide>
        <Slide top>
          <StyledInhaDate src={ImageInhaDate} />
        </Slide>

        <Margin size="120" />

        <Flip top>
          <StyledWantedLogo src={ImageWantedLogo} width={160} height={160} />
          <StyledInhaborText src={ImageIhaborText} />
        </Flip>

        <Margin size="160" />

        <Fade bottom>
          <Link href="/select">
            <StyledInhaClue src={ImageInhaClue} />
          </Link>
          <StyledText>
            상단 사진을 눌러서
            <br /> 2학기 여론조사 문항에 대한 단서 찾아보기
          </StyledText>
        </Fade>

        <Margin size="160" />
        <Tada>
          <Link href="https://www.instagram.com/p/Ce53N9dpS8h/?utm_source=ig_web_copy_link">
            <Styled1stResult src={Image1stResult} />
          </Link>
        </Tada>

        <Margin size="40" />

        <StyledText>
          상단 사진을 눌러서
          <br /> 1학기 인하대학교 여론조사 결과 확인하기
        </StyledText>

        <Margin size="88" />

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

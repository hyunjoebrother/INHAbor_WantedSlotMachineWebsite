import React from "react";
import styled, { css } from "styled-components";

import Layout from "../components/Layout";
import Margin from "../components/Margin";
import Modal from "../components/Modal";
import Head from "next/head";
import Text from "../components/Text";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import Image from "next/image";
import ImageTitle from "../public/wanted.png";
import ImageTitleText from "../public/wanted_text.png";
import ImageOldImg from "../public/oldpaper_bg.png";
import ImageInhaTitle from "../public/inha_title.png";
import ImageInhaDate from "../public/inha_date.png";
import ImageInhaClue from "../public/inhaclue_main.png";

const BackGround = styled.div`
  top: 0;
  width: 100%;
  height: 2000px;
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
  width: 120%;
  height: 120%;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  font-size: 10px;
  font-weight: 400;
  margin: auto;
  text-align: center;
  line-height: 2;
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

        <Margin size="48" />
        <Fade bottom>
          <StyledInhaClue src={ImageInhaClue} />
        </Fade>
      </BackGround>
    </>
  );
}

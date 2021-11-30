import React from "react";
import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
  IconWrapper,
  Icon,
  Highlight,
} from "./InfoSC";
import Image1 from "../../images/svg-4.svg";
import ReactIcon from "../../images/reactjs-icon.svg";
import MUIcon from "../../images/material-ui-logo.svg";
import AxiosIcon from "../../images/axios-logo.svg"
import NextLogo from "../../images/nextjs-logo.svg"

const Info = () => {
  return (
    <InfoContainer id="services">
      <InfoRow>
        <Column1>
          <TextWrapper>
            <TopLine>[ Experiência ]</TopLine>
            <Heading>Desenvolvimento WEB</Heading>
            <Subtitle>
              Experiência em mercado com <Highlight>React</Highlight>, tal como
              com as tecnologias mais populares usadas em paralelo a esse framework
              como <Highlight>Next.js</Highlight>, <Highlight>Axios</Highlight>,
              <Highlight> Material-UI</Highlight>, <Highlight>Formik</Highlight>{" "}
              entre outras.
            </Subtitle>
            <IconWrapper>
              <Icon src={ReactIcon} />
              <Icon src={MUIcon} />
              <Icon src={AxiosIcon} />
              <Icon src={NextLogo} />
            </IconWrapper>
          </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={Image1} />
          </ImgWrap>
        </Column2>
      </InfoRow>
    </InfoContainer>
  );
};

export default Info;

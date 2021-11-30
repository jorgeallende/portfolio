import React from "react";
import {
  AboutContainer,
  AboutHeading,
  AboutMe,
  AboutRow,
  Column1,
  Column2,
  Column3,
  Wrapper,
  ImgWrapper,
  Img,
  WrapperR,
  Highlight,
  WrapperM,
} from "./AboutSC";
import Imagem from "../../images/svg-5.svg";
import Imagem2 from "../../images/pc1v.svg"

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutRow>
        <Column1>
          <Wrapper>
            <AboutHeading>Sobre mim</AboutHeading>
            <AboutMe>
              Estudante de Ciência da Computação com uma grande inclinação para
              área de desenvolvimento web. Entusiasta das artes visuais como
              ilustrações digitais, edição de vídeo e design UX. Sempre a
              procura da perfeita representação visual, a primeira impressão é a
              mais importante.
            </AboutMe>
          </Wrapper>
        </Column1>
        <Column2>
          <WrapperM>
            <ImgWrapper>
              <Img src={Imagem2} />
            </ImgWrapper>
          </WrapperM>
        </Column2>
        <Column3>
          <WrapperR>
            <AboutHeading>Educação</AboutHeading>
            <Highlight>Ensino Médio</Highlight>
            <AboutMe>
              Técnico em informática pelo IFRN.
            </AboutMe>
            <Highlight>Ensino Superior (cursando)</Highlight>
            <AboutMe>
              Cursando sexto período de Ciência da Computação na UFERSA.
            </AboutMe>
          </WrapperR>
        </Column3>
      </AboutRow>
    </AboutContainer>
  );
};

export default About;

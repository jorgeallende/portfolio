import styled from "styled-components";
import { MainColor, AuxColor } from "../../global";

export const InfoContainer = styled.div`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cfd7e6;
`;

export const InfoRow = styled.div`
  height: 75%;
  width: 70%;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${AuxColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  background-image: url(https://image.freepik.com/free-photo/multi-colored-psychedelic-background_23-2148805243.jpg);
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 450px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  margin-left: 30px;
  padding-right: 0;
  background-color: transparent;
`;

export const IconWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Icon = styled.img`
  max-width: 100px;
  margin: 0 10px 10px 0;
  padding-right: 0;
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: ${AuxColor};
`;

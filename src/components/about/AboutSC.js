import styled from "styled-components";
import { MainColor, AuxColor } from "../../global";

export const AboutContainer = styled.div`
  height: 90vh;
  background-color: #cfd7e6;
  width: 100%;
`;

export const AboutRow = styled.div`
  display: flex;
`;

export const Column1 = styled.div`
  flex: 1;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Column2 = styled.div`
  flex: 1;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Column3 = styled.div`
  flex: 1;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 70%;
  width: 80%;
  text-align: right;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  /* -webkit-box-shadow: inset 4px 4px 15px 0px #000000,
    inset -50px -50px 0px -30px rgba(0, 0, 0, 0);
  box-shadow: inset 4px 4px 15px 0px #000000,
    inset -50px -50px 0px -30px rgba(0, 0, 0, 0); */
`;

export const WrapperM = styled.div`
  height: 70%;
  width: 80%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
`;

export const WrapperR = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${MainColor}
  /* background-image: url(https://image.freepik.com/free-photo/multi-colored-psychedelic-background_23-2148805243.jpg);
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */
`;

export const AboutMe = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Highlight = styled.span`
  color: ${AuxColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

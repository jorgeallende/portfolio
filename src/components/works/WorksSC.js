import styled from "styled-components";
import { MainColor, AuxColor } from "../../global.js";

export const WorkContainer = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: ${MainColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WrapperContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;

export const MenuBar = styled.div`
  display: flex;
  padding-bottom: 15px;
  border-bottom: solid 1px ${AuxColor};
`;

export const ItemMenu = styled.button`
  border-radius: 50px;
  background: ${(props) => (props.active ? "#fff" : AuxColor)};
  white-space: nowrap;
  padding: 10px 10px;
  color: ${(props) => (props.active ? MainColor : "#fff")};
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin: 0 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
  /* background-color: beige; */
  width: 70vw;
  height: 100%;
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0 60px;
`;

export const Imagem = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
`

export const CustomH1 = styled.h1`
  /* font-size: 16px;
  text-transform: uppercase;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;*/
  color: #ffffff;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`

export const CustomP = styled.p`
  color: #fff;
  text-align: justify;
`
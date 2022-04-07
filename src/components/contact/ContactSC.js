import styled from "styled-components";
import { MainColor, AuxColor } from "../../global";

export const ContactContainer = styled.div`
  height: max-content;
  background-color: ${MainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width:500px;
  height: 120px;
  flex: 1;
  text-align: right;
  margin-right: 5px;
`;

export const Right = styled.div`
  flex: 1;
`;

export const FootLine = styled.div`
  margin-top: 10px;
  width: 536px;
`;

export const Paragrafo = styled.p`
  margin-right: 10px;
  color: ${(props)=>(props.title ? "#ff7f00" : "")}
`

export const TopLine = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 19px 0;
`
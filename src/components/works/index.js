import React from "react";
import { useState } from "react";
import {
  WorkContainer,
  WrapperContainer,
  ContentWrapper,
  MenuBar,
  ItemMenu,
  Left,
  Right,
  Imagem,
  CustomH1,
  CustomP,
} from "./WorksSC";
import { portfolioItem } from "./data";

const Works = () => {
  const [active, setActive] = useState("1");
  const [activePage] = [0, 1, 2];

  function handleButton(props) {
    setActive(props);
  }

  return (
    <WorkContainer id="work">
      <WrapperContainer>
        <MenuBar>
            {portfolioItem.map(item => (
                <ItemMenu
                onClick={() => setActive(item.codigo)}
                active={active === item.codigo ? true : false}
              >
                {item.nome}
              </ItemMenu>
            ))}
          {/* <ItemMenu
            onClick={() => setActive("1")}
            active={active === "1" ? true : false}
          >
            Leon
          </ItemMenu>
          <ItemMenu
            onClick={() => setActive("2")}
            active={active === "2" ? true : false}
          >
            Seeds
          </ItemMenu>
          <ItemMenu
            onClick={() => setActive("3")}
            active={active === "3" ? true : false}
          >
            Crevettic
          </ItemMenu> */}
        </MenuBar>
        <ContentWrapper>
            <Left>
                <Imagem style={{marginLeft: "40px"}}src={portfolioItem[active-1].img}/>
                <Imagem src={portfolioItem[active-1].img2}/>
            </Left>
            <Right>
                <CustomH1>[ {portfolioItem[active-1].nome} ]</CustomH1>
                <CustomP>{portfolioItem[active-1].texto}</CustomP>
            </Right>
        </ContentWrapper>
      </WrapperContainer>
    </WorkContainer>
  );
};

export default Works;

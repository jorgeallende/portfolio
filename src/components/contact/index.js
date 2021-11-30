import React from "react";
import { ContactContainer, Wrapper, Left, Right, FootLine, Paragrafo, TopLine } from "./ContactSC";

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <TopLine>Topline</TopLine>
      <Wrapper>
        <Left>
            <Paragrafo>Contato</Paragrafo>
            <Paragrafo>Instagram</Paragrafo>
        </Left>
        <Right>
            <br/>
            <Paragrafo>@jojiallende</Paragrafo>
        </Right>
      </Wrapper>
      <FootLine>Jorge Allende, 2021</FootLine>
    </ContactContainer>
  );
};

export default Contact;

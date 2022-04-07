import React from "react";
import { ContactContainer, Wrapper, Left, Right, FootLine, Paragrafo, TopLine } from "./ContactSC";

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <TopLine>Contato</TopLine>
      <Wrapper>
        <Left>
            <Paragrafo title={true}>Email</Paragrafo>
            <Paragrafo title={true}>Instagram</Paragrafo>
            <Paragrafo title={true}>LinkedIn</Paragrafo>
        </Left>
        <Right>
            <Paragrafo>jorgeallende333@gmail.com</Paragrafo>
            <Paragrafo>@jojiallende</Paragrafo>
            <Paragrafo>@jorge-allende-dev</Paragrafo>
        </Right>
      </Wrapper>
    </ContactContainer>
  );
};

export default Contact;

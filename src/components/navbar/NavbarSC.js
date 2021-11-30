import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll as Scroll } from "react-scroll";
import { MainColor, AuxColor } from "../../global";

export const Nav = styled.nav`
  background-color: ${MainColor};
  height: 80px;
  display: flex;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: solid 1px ${AuxColor};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-indez: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkS)`
  color: ${AuxColor};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  letter-spacing: -11px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
  font-family: "Rubik Mono One", sans-serif;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${AuxColor};
    transition: 0.5s all ease;
  }
  &:active {
    border-bottom: 3px solid ${AuxColor};
    transition: 0.5s all ease;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  border-radius: 50px;
  background: ${AuxColor};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarSC";
import { FaBars } from "react-icons/fa";
import minhaLogo from "../../images/minha-logo.png"

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
           [ J O R G E ]
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                hover={true}
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                hover={true}
              >
                Projetos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                hover={true}
              >
                Experiência
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                hover={true}
              >
                Contato
              </NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contato
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

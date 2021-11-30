import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroSC";
import Video from "../../videos/video.mp4";
import Video2 from "../../videos/video2.mp4";
import Video3 from "../../videos/video3.mp4";
import { useState } from "react";
import { Button } from "../ButtonElement";
import { Link as LinkS } from "react-scroll";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video2} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Jorge Allende</HeroH1>
        <HeroP>Web Developer / Designer UX / Front-end Developer</HeroP>
        <HeroBtnWrapper>
          <Button
            style={{
              backgroundColor: "#5f8433",
              fontSize: "16px",
              lineHeight: "16px",
              fontWeight: 700,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
            }}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            <LinkS
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              hover={true}
            >
              Conhecer mais
            </LinkS>
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

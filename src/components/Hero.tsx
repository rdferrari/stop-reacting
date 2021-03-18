import style from "styled-components";
import Video from "./Video";

const HeroContainer = style.div`
  position: relative;
  z-index: 101;
`;

const HeroIntroContainer = style.div`
  position: absolute;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
  top: 40vh;
`;

const HeroTitle = style.h1`
  font-size: 35px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

const HeroText = style.p`
  font-size: 18px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroIntroContainer>
        <HeroTitle>Stop Reacting</HeroTitle>
        <HeroText>
          {"< "}Coding for equality and justice{" />"}
        </HeroText>
      </HeroIntroContainer>

      <Video videoName="Hero-Highline-small.mp4" />
    </HeroContainer>
  );
}

export default Hero;
